import fs from 'fs/promises';
import path from 'path';
import getModulePaths from '../utils/getModulePaths.js';

const { __dirname } = getModulePaths(import.meta);

export const create = async () => {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');

  try {
    await fs.writeFile(filePath, 'I am fresh and young', {flag: "wx"});
  } catch (_) {
    throw new Error('FS operation failed');
  }
};

create();
