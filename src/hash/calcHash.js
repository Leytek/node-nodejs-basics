import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import crypto from 'crypto';
import events from 'events';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const calculateHash = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const file = await fs.open(filePath);
  const fileStream = file.createReadStream();
  const hash = crypto.createHash('sha256');

  fileStream.pipe(hash);
  await events.once(fileStream, 'end');
  return hash.digest('hex');
};

console.log(await calculateHash());
