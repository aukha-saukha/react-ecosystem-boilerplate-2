module.exports = {
  '*.js': (filenames) => {
    return filenames.map((filename) => {
      return `prettier --check '${filename}'`;
    });
  },
};
