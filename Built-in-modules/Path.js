const path = require("path");

// seperator
console.log(path.sep);

// join paths
const textPath = path.join("/content", "text", "text.txt");
console.log(textPath);

const base = path.basename(textPath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "text", "text.txt");
console.log(absolute);
