// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: "expo",
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
  },
  overrides: {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    extends: ['plugin:testing-library/react'],
  }
};
