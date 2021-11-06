import {swap} from './Hilfsunktionen'

export const BubbleSortTask = (timeout = 1000) => {
  let paused = false;

  async function wait() {
    while(paused) {
      await delay(10);
    }

    return Promise.resolve();
  }

  async function delay(timeout) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }

  async function meta(callback) {
    await wait();
    await delay(timeout);
    callback();
  }

  const stopOrStart = () => {
    paused = !paused;
  }

  const start = async (A, sendStatus) => {
    let m = A.length;
    for (let i = 0; i < m; i++) {
      await meta(async () => sendStatus({position: 1, i, array: A}));
      for (let j = 0; j < m - i; j++) {
        await meta(async () => sendStatus({position: 2, i, j, values: [A[j], A[j + 1]], array: A}));
        await meta(async () => sendStatus({position: 3, i, j, values: [A[j], A[j + 1]], array: A}));
        if (A[j] > A[j + 1]) {
          swap(A, j, j + 1);
          await meta(async () => sendStatus({position: 4, i, j, values: [A[j], A[j + 1]], array: A}));
        }
      }
    }
  }
  return {start, stopOrStart};
}


