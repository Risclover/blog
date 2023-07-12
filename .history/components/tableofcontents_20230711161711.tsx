export const TableOfContents = ({ nodes }: any) => {
  if (!nodes?.length) {
    return null;
  }

  return (
    <div className={"toc"}>
      <h3 className={"secondary-text"}>Table of contents</h3>
      {renderNodes(nodes)}
    </div>
  );
};

function renderNodes(nodes) {
  return (
    <ul>
      {nodes.map((node) => (
        <li key={node.data.hProperties.id}>
          <TOCLink node={node} />
          {node.children?.length > 0 && renderNodes(node.children)}
        </li>
      ))}
    </ul>
  );
}

const TOCLink = ({ node }: any) => {
  let fontSizes: any = { 2: "base", 3: "sm", 4: "xs" };
  const id = node.data.hProperties.id;
  return (
    <a
      href={`#${id}`}
      className={`block text-${fontSizes[node.depth]} hover:accent-color py-1`}
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById(id)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {node.value}
    </a>
  );
};

export default TableOfContents;
