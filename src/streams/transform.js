import stream from 'stream';

export const transform = async () => {
  const transformStream = new stream.Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().trim().split``.reverse().join`` + '\n');
    }
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

transform();
