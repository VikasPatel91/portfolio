import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});
module.exports = {
  rules: {
    "react/no-unescaped-entities": "warn", // or 'off'
  },
};

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;
