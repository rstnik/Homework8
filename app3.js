let digit;
let start = 1;
let end = 100;
let str = "";
do {
  if (digit !== undefined) {
    alert("Please enter the correct number");
  }
  digit = parseInt(prompt("Enter the number"));
} while (isNaN(digit));
for (let i = start; i <= end; i++) {
let square = i*i
  if (square < digit) {
    str += square + " ";
  }
}
document.write(str)