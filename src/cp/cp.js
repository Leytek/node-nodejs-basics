import path from 'path';
import url from 'url';
import cp from 'child_process';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const spawnChildProcess = async (args) => {
  const scriptPath = path.join(__dirname, 'files', 'script.js');

  cp.fork(scriptPath, args);
};

spawnChildProcess(['arg1', 'arg2']);
