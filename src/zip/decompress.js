import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import zlib from 'zlib';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const decompress = async () => {
  const fileFromPath = path.join(__dirname, 'files', 'archive.gz');
  const fileToPath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const fileFrom = await fs.open(fileFromPath);
  const fileTo = await fs.open(fileToPath, 'w');
  const fileFromStream = fileFrom.createReadStream();
  const fileToStream = fileTo.createWriteStream();
  const gz = zlib.createUnzip();

  fileFromStream.pipe(gz).pipe(fileToStream);
};

decompress();
