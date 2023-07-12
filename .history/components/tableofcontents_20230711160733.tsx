export const TableOfContents = ({ nodes }) => {
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
