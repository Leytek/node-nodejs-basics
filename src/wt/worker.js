import wt from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (data) => {
  wt.parentPort.postMessage(data);
};

const runWorker = (data) => {
  const result = nthFibonacci(data);
  sendResult(result);
}

runWorker(wt.workerData);
