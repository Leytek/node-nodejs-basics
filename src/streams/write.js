import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const write = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  const file = await fs.open(filePath, 'w');
  const fileStream = file.createWriteStream();

  process.stdin.pipe(fileStream);
};

write();
