export const parseArgs = () => {
  process.argv.forEach((arg, i) => {
    if(/--.*/.test(arg))
      console.log(arg.slice(2), 'is', process.argv[i + 1]);
  });
};

parseArgs();
