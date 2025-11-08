const languages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let i = 0;
let output = "";

while (i < languages.length) {
  output += languages[i];
  if (i < languages.length - 1) output += "\n"; // only add newline between lines
  i++;
}

console.log(output);