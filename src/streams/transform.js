import path from 'path';
import url from 'url';
import stream from 'stream';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const transform = async () => {
  const transformStream = new stream.Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().trim().split``.reverse().join`` + '\n');
    }
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

transform();
