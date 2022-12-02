import path from 'path';
import cp from 'child_process';
import getModulePaths from '../utils/getModulePaths.js';

const { __dirname } = getModulePaths(import.meta);

export const spawnChildProcess = async (args) => {
  const scriptPath = path.join(__dirname, 'files', 'script.js');

  cp.fork(scriptPath, args);
};

spawnChildProcess(['arg1', 'arg2']);
