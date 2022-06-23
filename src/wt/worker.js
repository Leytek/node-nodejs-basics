import wt from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (outputData) => {
  wt.parentPort.postMessage(outputData);
};

const runWorker = (inputData) => {
  const result = nthFibonacci(inputData);
  sendResult(result);
}

runWorker(wt.workerData);
