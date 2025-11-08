const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  let i = 0;
  let output = "";
  while (i < size) {
    output += "X".repeat(size) + "\n";
    i++;
  }
  console.log(output.slice(0, -1)); // Remove last newline
}