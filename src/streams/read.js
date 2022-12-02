import fs from 'fs/promises';
import path from 'path';
import getModulePaths from '../utils/getModulePaths.js';

const {__dirname} = getModulePaths(import.meta);

export const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const file = await fs.open(filePath);
  const fileStream = file.createReadStream();

  fileStream.pipe(process.stdout);
};

read();
