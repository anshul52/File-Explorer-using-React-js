import React from "react";

const FileViewer = ({ selected }) => {
  if (!selected || selected.isFolder) return <h2>Select a file to view</h2>;

  return (
    <>
      <h2>
        Viewing File:{"  "} {selected.name}
      </h2>
    </>
  );
};

export default FileViewer;
