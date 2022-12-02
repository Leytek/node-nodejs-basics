export const parseArgs = () => {
  const formattedVars = process.argv.reduce((acc, arg, i, arr) => {
    const valueCandidate = arr[i + 1];
    if (valueCandidate && /^--[^-]+/.test(arg))
      acc.push(`${arg.slice(2)} is ${valueCandidate}`);
    return acc;
  }, []).join`, `;

  console.log(formattedVars);
};

parseArgs();
