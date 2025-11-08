const x = parseInt(process.argv[2]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  let output = "";
  while (i < x) {
    output += "C is fun\n";
    i++;
  }
  if (output) console.log(output.slice(0, -1)); // Only print if output is not empty
}