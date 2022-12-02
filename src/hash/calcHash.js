import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import events from 'events';
import getModulePaths from '../utils/getModulePaths.js';

const { __dirname } = getModulePaths(import.meta);

export const calculateHash = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const file = await fs.open(filePath);
  const fileStream = file.createReadStream();
  const hash = crypto.createHash('sha256');

  fileStream.pipe(hash);
  await events.once(hash, 'finish');
  return hash.digest('hex');
};

console.log(await calculateHash());
