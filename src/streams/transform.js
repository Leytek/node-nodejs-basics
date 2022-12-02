import stream from 'stream';

export const transform = async () => {
  const transformStream = new stream.Transform({
    transform(chunk, encoding, callback) {
      const stringedChunk = chunk.toString();
      const reversedString = stringedChunk.split``.reverse().join``;
      const result = reversedString.trim() + '\n';
      callback(null, result);
    }
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

transform();
