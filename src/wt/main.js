import path from 'path';
import url from 'url';
import os from 'os';
import wt from 'worker_threads';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const performCalculations = async () => {
  const baseNum = 10;
  function createWorker(data) {
    return new Promise(res => {
      const worker = new wt.Worker(path.join(__dirname, 'worker.js'), {workerData: data});
      worker.on('message', v => res({status: 'resolved', data: v}));
      worker.on('error', _ => res({status: 'error', data: null}));
    });
  }
  const workers = Array.from({length: os.cpus().length}, (_, i) => createWorker(baseNum + i));
  return Promise.all(workers);
};

console.log(await performCalculations());
