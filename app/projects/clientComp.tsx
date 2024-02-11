'use client';
import React, { useState } from 'react';

// Create the UploadForm component
export default function Proj() {
  // State to hold the selected file
  const [file, setFile] = useState<File | null>(null);

  // Function to handle form submission
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if a file is selected
    if (!file) {
      console.error('No file selected for upload');
      return;
    }

    try {
      // Create FormData object and append the file to it
      const formData = new FormData();
      formData.append('file', file);

      // Make a POST request to the /api/upload endpoint
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      // Handle errors
      if (!response.ok) {
        throw new Error(`Upload failed: ${await response.text()}`);
      }

      // Optionally, handle success
      console.log('File uploaded successfully');
    } catch (error) {
      // Handle errors here
      console.error('Error uploading file:', error);
    }
  };

  // Function to handle file input change
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };

  // Render the form
  return (
    <form onSubmit={onSubmit}>
      <input
        type="file"
        name="file"
        onChange={onFileChange}
      />
      <input type="submit" value="Upload" />
    </form>
  );
}
