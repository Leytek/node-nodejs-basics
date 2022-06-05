import path from 'path';
import url from 'url';
import cp from 'child_process';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const spawnChildProcess = async (args) => {
  const scriptPath = path.join(__dirname, 'files', 'script.js');
  const newArgs = [scriptPath, ...args];

  cp.spawn(`node`, newArgs, {stdio: ['inherit', 'inherit', 'inherit']});
};

spawnChildProcess(['arg1', 'arg2']);
