import React from "react";

export default function UploadBox({ onUpload, fileName }) {

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="border p-4 rounded bg-gray-50 flex flex-col items-center">
      
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />

      {fileName && (
        <p className="mt-2 text-sm text-gray-700">
          Uploaded: {fileName}
        </p>
      )}

    </div>
  );
}