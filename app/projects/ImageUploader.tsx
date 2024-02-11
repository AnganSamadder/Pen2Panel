'use client';
import { useState, DragEvent } from 'react';

export default function ImageUploader({ uploadHandler }: ImageUploaderProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | null = (event.target.files as FileList)[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file: File | null = event.dataTransfer.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fileInput = event.currentTarget.querySelector('input[type="file"]') as HTMLInputElement;
    const file: File | null = (fileInput.files as FileList)[0];

    if (!file) {
      throw new Error('No file uploaded');
    }

    const formData = new FormData();
    formData.append('file', file);

    await uploadHandler(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '80%', textAlign: 'center' }}>
      <label htmlFor="file">Upload Here:</label>
      <div
        style={{
          position: 'relative',
          width: '240px',
          height: '200px',
          overflow: 'hidden',
          border: '2px dashed #ccc',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
        <input
          type="file"
          name="file"
          id="file"
          onChange={handleImageChange}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '50px',
            opacity: 0,
            cursor: 'pointer',
          }}
        />
      </div>
      <input type="submit" value="Upload" style={{ marginTop: '10px', padding: '8px', cursor: 'pointer' }} />
    </form>
  );
}
