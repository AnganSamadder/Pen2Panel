// ServerUploadPage.tsx
import { writeFile } from 'fs/promises';
import { join } from 'path';
import ImageUploader from './ImageUploader';

export default function CombinedUploader() {
  async function upload(data: FormData) {
    'use server';

    const file: File | null = data.get('file') as unknown as File;
    if (!file) {
      throw new Error('No file uploaded');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join(__dirname, '../../../public/inputIMG/', file.name);
    await writeFile(path, buffer);
    console.log(`open ${path} to see the uploaded file`);

    return { success: true };
  }

  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50vh', // Ensure full height of the viewport
        }}>
          <div style={{ border: '1px solid #ccc', width: '300px', height: '300px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ImageUploader uploadHandler={upload} />
          </div>
          <div style={{ border: '1px solid #ccc', width: '300px', height: '300px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="textbox">Type your prompt here:</label>
            <textarea
              id="textbox"
              name="textbox"
              rows={4}
              cols={30}
              className="text-black static"
              style={{ width: '85%', height: '80%', boxSizing: 'border-box' }}
            ></textarea>
          </div>
        </div>
      </div>
    </main>
  );
}
