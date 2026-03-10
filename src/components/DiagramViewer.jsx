import React, { useState } from "react";

export default function DiagramViewer({ image, selectedComponent }) {

  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom((z) => z + 0.2);
  const zoomOut = () => setZoom((z) => z - 0.2);
  const reset = () => setZoom(1);

  if (!image) {
    return (
      <div className="flex items-center justify-center h-96 border">
        No diagram uploaded
      </div>
    );
  }

  return (
    <div className="border p-4">

      <div className="mb-2 space-x-2">
        <button onClick={zoomIn} className="px-3 py-1 bg-blue-500 text-white rounded">
          Zoom In
        </button>

        <button onClick={zoomOut} className="px-3 py-1 bg-blue-500 text-white rounded">
          Zoom Out
        </button>

        <button onClick={reset} className="px-3 py-1 bg-gray-500 text-white rounded">
          Reset
        </button>
      </div>

      <div className="relative overflow-hidden h-96 flex justify-center items-center">

        <img
          src={image}
          alt="diagram"
          style={{
            transform: `scale(${zoom})`,
            transition: "transform 0.2s"
          }}
        />

        {selectedComponent && (
          <div
            style={{
              position: "absolute",
              left: selectedComponent.x,
              top: selectedComponent.y,
              width: selectedComponent.w,
              height: selectedComponent.h,
              border: "3px solid red",
              background: "rgba(255,0,0,0.2)"
            }}
          />
        )}

      </div>

    </div>
  );
}