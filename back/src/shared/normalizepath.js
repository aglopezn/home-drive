const path = require('path');

const HOME_PATH = 'D:\\Desktop'; 
const REG_EX = /\//g;

const normalizePath = (dirPath) => {
    relativePath = dirPath ? dirPath.replace(REG_EX, '\\') : '\\';
    absolutePath = path.join(HOME_PATH, relativePath);
    return {relativePath, absolutePath}
};

module.exports = normalizePath;