import React, { useState, useEffect } from "react";
import UploadBox from "../components/UploadBox";
import DiagramViewer from "../components/DiagramViewer";
import ComponentList from "../components/ComponentList";
import { getComponents } from "../services/api";

export default function Dashboard() {

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    getComponents().then((data) => {
      setComponents(data);
    });
  }, []);

  const handleUpload = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    setFileName(file.name);
  };

  return (
    <div className="p-6 space-y-4">

      <UploadBox onUpload={handleUpload} fileName={fileName} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <DiagramViewer
          image={image}
          selectedComponent={selectedComponent}
        />

        <ComponentList
          components={components}
          setSelectedComponent={setSelectedComponent}
        />

      </div>

    </div>
  );
}