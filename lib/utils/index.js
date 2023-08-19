const path = require('path');

const isPathRelative = (path) => path === '.' || path.startsWith('./') || path.startsWith('../');

const getNormalizedPath = (currentPath) => {
  const normalizedPath = path.toNamespacedPath(currentPath);
  const fromPath = normalizedPath.split('src')[1];

  return fromPath.split(path.sep);
};

module.exports = {
  isPathRelative,
  getNormalizedPath,
};
