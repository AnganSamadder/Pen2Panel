// ServerUploadPage.tsx
import { writeFile } from 'fs/promises';
import { join } from 'path';
import CombinedUploader from './CombinedUploader';

export default function ServerUploadPage() {
  async function upload(data: FormData) {
    'use server';

    const file: File | null = data.get('file') as unknown as File;
    if (!file) {
      throw new Error('No file uploaded');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log(__dirname);
    const path = join(__dirname, '../../public/inputIMG/', file.name);
    await writeFile(path, buffer);
    console.log(`open ${path} to see the uploaded file`);

    return { success: true };
  }

  return (
    <main>
      <div>
        <CombinedUploader />
      </div>
    </main>
  );
}
