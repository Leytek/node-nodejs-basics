export const parseArgs = () => {
  let str = '';
  process.argv.forEach((arg, i) => {
    if(/^--[^-]+/.test(arg))
      str += `${arg.slice(2)} is ${process.argv[i + 1]}, `;
  });
  console.log(str.slice(0, -2));
};

parseArgs();
