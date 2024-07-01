const path = require('path');

console.log(path.sep);
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);   // op -> \content\subfolder\test.txt

const base = path.basename(filePath)
console.log(base); //op -> test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute); // op -> E:\NODE.js\node\content\subfolder\test.txt