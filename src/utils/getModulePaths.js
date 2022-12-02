import { dirname } from "path";
import { fileURLToPath } from "url";

export default function getModulePaths({ url }) {
  const filename = fileURLToPath(url);

  return {
    __filename: filename,
    __dirname: dirname(filename)
  };
}
