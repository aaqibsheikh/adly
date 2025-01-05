import React, { useState } from 'react';

interface FileItem {
  id: number;
  file: File;
  previewUrl: string;
}

const UploadCreativeForm: React.FC = () => {
  const [files, setFiles] = useState<FileItem[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const uploadedFile = e.target.files[0];
      const newFile: FileItem = {
        id: Date.now(), // Unique identifier for each file
        file: uploadedFile,
        previewUrl: URL.createObjectURL(uploadedFile),
      };
      setFiles((prevFiles) => [...prevFiles, newFile]);
    }
  };

  const handleRemoveFile = (id: number) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  };

  return (
    <div className="my-8 p-6 border border-[#E5E7E7] rounded-2xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[28px] text-center font-semibold font-inter text-black mb-10">
          Upload your creative
        </h2>
        <div
          className={`${
            files.length === 0 ? 'flex justify-center items-center h-64' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
          }`}
        >
          {/* Upload Box */}
          <div
            className={`relative border-2 border-dashed border-indigo-400 rounded-lg bg-indigo-50 p-8 text-center ${
              files.length === 0 ? 'w-96 h-64' : ''
            }`}
          >
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-indigo-600 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12 12 16.5m0 0L16.5 12m-4.5 4.5V3"
                />
              </svg>
              <p className="text-base font-medium text-black">
                Upload another creative
              </p>
              <p className="text-sm text-gray-500">File type: mp4, 3gp</p>
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".mp4, .3gp"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileUpload}
            />
          </div>

          {/* Uploaded Files */}
          {files.map((file) => (
            <div
              key={file.id}
              className="relative rounded-lg overflow-hidden border border-gray-300"
            >
              <img
                src={file.previewUrl}
                alt="Uploaded creative"
                className="w-full h-40 object-cover"
              />
              <button
                onClick={() => handleRemoveFile(file.id)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadCreativeForm;
