import { useState } from "react";
import "./App.css";
import folderData from "./data/folderData";
import FileViewer from "./components/FileViewer";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
import { useSelector, useDispatch } from "react-redux";
import { setSelected } from "./redux/Slices/fileSystemSlice";
import { toast } from "react-toastify";

function App() {
  const [explorerData, setExplorerData] = useState(folderData);
  const { insertNode, deleteNode, updateNode } = useTraverseTree();
  const selected = useSelector((state) => state.fileSystem.selected);
  const dispatch = useDispatch();
  const handleInsertNode = (folderId, itemName, isFolder) => {
    const finalItem = insertNode(explorerData, folderId, itemName, isFolder);
    if (isFolder) {
      toast(`New Folder Created : ${itemName}`);
    } else if (!isFolder) {
      toast(`New File Created : ${itemName}`);
    }
    console.log(folderId, itemName, isFolder);
    return finalItem;
  };
  const handleDeleteNode = (folderId) => {
    const finalItem = deleteNode(explorerData, folderId);
    setExplorerData(finalItem);
  };

  const handleUpdateFolder = (id, updatedValue, isFolder) => {
    const finalItem = updateNode(explorerData, id, updatedValue, isFolder);
    setExplorerData(finalItem);
  };

  return (
    <main className="App">
      <section className="folderContainerBody">
        <aside className="folder-container">
          <Folder
            handleInsertNode={handleInsertNode}
            handleDeleteNode={handleDeleteNode}
            handleUpdateFolder={handleUpdateFolder}
            explorerData={explorerData}
            onSelect={(node) => dispatch(setSelected(node))}
          />
        </aside>
        <div className="empty-state">
          <FileViewer selected={selected} />
        </div>
      </section>
    </main>
  );
}

export default App;
