const languages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let i = 0;
let output = "";

while (i < languages.length) {
  output += languages[i] + (i < languages.length - 1 ? "\n" : ""); // avoids extra newline
  i++;
}

console.log(output);