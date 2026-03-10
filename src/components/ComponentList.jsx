import React, { useState } from "react";

export default function ComponentList({ components, setSelectedComponent }) {

  const [selected, setSelected] = useState(null);

  const handleClick = (comp) => {
    setSelected(comp.id);
    setSelectedComponent(comp);
  };

  return (
    <div className="border p-4">

      <h2 className="font-bold mb-3">Components</h2>

      <ul>
        {components.map((comp) => (
          <li
            key={comp.id}
            onClick={() => handleClick(comp)}
            className={`p-2 cursor-pointer rounded mb-1
            ${selected === comp.id ? "bg-blue-500 text-white" : "bg-gray-100"}`}
          >
            {comp.name}
          </li>
        ))}
      </ul>

    </div>
  );
}