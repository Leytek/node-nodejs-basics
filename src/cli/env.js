export const parseEnv = () => {
  const envEntries = Object.entries(process.env);
  const formattedRRSVars = envEntries.reduce((acc, [key, value]) => {
    if (/^RSS_.+/.test(key))
      acc.push(`${key}=${value}`);
    return acc;
  }, []).join`; `;

  console.log(formattedRRSVars);
};

parseEnv();
