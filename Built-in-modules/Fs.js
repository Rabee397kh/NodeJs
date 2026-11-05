// const fs = require("fs");
// // console.log(fs);

// const { readFileSync, writeFileSync } = require("fs");

// const textContent = readFileSync("./content/text/text.txt", "utf-8");
// console.log(textContent);

// writeFileSync(
//   "./content/text2.txt",
//   "i have written this with writeFileSync Method",
// );

// Async
const { readFile, writeFile } = require("fs");

readFile("./content/text/text.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(res);
  const content1 = res;
  console.log(content1 + " from inside");

  writeFile("./content/asynctext.txt", content1, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  });
});
