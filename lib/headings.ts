import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";
import { Node, Data } from "unist";
import { Heading } from "mdast";
import { VFile } from "vfile";

interface TransformedNode {
  value: string;
  depth: number;
  data?: Data;
  children: TransformedNode[];
}

interface NodeData extends Data {
  hProperties?: { [key: string]: any };
}

function transformNode(
  node: Heading,
  output: TransformedNode[],
  indexMap: { [depth: number]: TransformedNode }
): void {
  const transformedNode: TransformedNode = {
    value: toString(node),
    depth: node.depth,
    data: node.data,
    children: [],
  };

  if (node.depth === 2) {
    output.push(transformedNode);
    indexMap[node.depth] = transformedNode;
  } else if (node.depth !== 1) {
    const parent = indexMap[node.depth - 1];
    if (parent) {
      parent.children.push(transformedNode);
      indexMap[node.depth] = transformedNode;
    }
  }
}

export function headingTree() {
  return (node: Node, file: VFile): void => {
    file.data.headings = getHeadings(node);
  };
}

function getHeadings(root: Node): TransformedNode[] {
  const nodes: { [id: string]: number } = {};
  const output: TransformedNode[] = [];
  const indexMap: { [depth: number]: TransformedNode } = {};

  visit(root, "heading", (node: Heading) => {
    addID(node, nodes);
    transformNode(node, output, indexMap);
  });

  return output;
}

/*
 * Add an "id" attribute to the heading elements based on their content
 */
function addID(node: Heading, nodes: { [id: string]: number }): void {
  const id = toString(node);
  nodes[id] = (nodes[id] || 0) + 1;
  const suffix = nodes[id] > 1 ? ` ${nodes[id] - 1}` : "";

  const slug = `${id}${suffix}`
    .replace(/[^a-zA-Z\d\s-]/g, "")
    .split(" ")
    .join("-")
    .toLowerCase();

  node.data = node.data || ({} as NodeData);
  const data = node.data as NodeData;

  data.hProperties = data.hProperties || {};
  data.hProperties.id = slug;
}
