export const parseEnv = () => {
  let str = '';
  for(let key in process.env) {
    if(/^RSS_.+/.test(key))
      str += `${key}=${process.env[key]}; `;
  }
  console.log(str.slice(0, -2));
};

parseEnv();
