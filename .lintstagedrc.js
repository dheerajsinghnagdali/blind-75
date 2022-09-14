module.exports = {
  "*.{js,ts,jsx,tsx,json,css}": (filenames) =>
    `prettier -w ${filenames.join(" ")}`,
};
