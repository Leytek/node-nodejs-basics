import fs from 'fs/promises';
import path from 'path';
import getModulePaths from '../utils/getModulePaths.js';

const {__dirname} = getModulePaths(import.meta);

export const write = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  const file = await fs.open(filePath, 'w');
  const fileStream = file.createWriteStream();

  process.stdin.pipe(fileStream);
};

write();
