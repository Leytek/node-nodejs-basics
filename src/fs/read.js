import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const file = await fs.open(filePath).catch(e => {
    throw new Error('FS operation failed');
  });

  const fileStream = file.createReadStream();
  fileStream.pipe(process.stdout);
};

read();
