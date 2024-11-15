Object.defineProperty(exports, "__esModule", { value: true });
exports.headingTree = void 0;
var mdast_util_to_string_1 = require("mdast-util-to-string");
var unist_util_visit_1 = require("unist-util-visit");

function transformNode(node, output, indexMap) {
  var transformedNode = {
    value: (0, mdast_util_to_string_1.toString)(node),
    depth: node.depth,
    data: node.data,
    children: [],
  };
  if (node.depth === 2) {
    output.push(transformedNode);
    indexMap[node.depth] = transformedNode;
  } else if (node.depth !== 1) {
    var parent_1 = indexMap[node.depth - 1];
    if (parent_1) {
      parent_1.children.push(transformedNode);
      indexMap[node.depth] = transformedNode;
    }
  }
}
function headingTree() {
  return function (node, file) {
    file.data.headings = getHeadings(node);
  };
}
exports.headingTree = headingTree;
function getHeadings(root) {
  var nodes = {};
  var output = [];
  var indexMap = {};
  (0, unist_util_visit_1.visit)(root, "heading", function (node) {
    addID(node, nodes);
    transformNode(node, output, indexMap);
  });
  return output;
}

function addID(node, nodes) {
  var id = node.children
    .map(function (c) {
      return c.value;
    })
    .join("");
  nodes[id] = (nodes[id] || 0) + 1;
  node.data = node.data || {
    hProperties: {
      id: ""
        .concat(id)
        .concat(nodes[id] > 1 ? " ".concat(nodes[id] - 1) : "")
        .split(" ")
        .join("-")
        .toLowerCase(),
    },
  };
}
