const readline = require("readline");



const arguments = process.argv.slice(2) * 1000

setTimeout(() => {
  process.stdout.write(".");
}, arguments);
