let digit;
do {
  if (digit !== undefined) {
    alert("Please enter the correct number");
  }
  digit = parseInt(prompt("Enter the number"));
} while (isNaN(digit) || digit <= 0);

let squareOfThree = 1;
let exponent = 0;

while (squareOfThree < digit) {
    squareOfThree *= 3;
    exponent++;
}

if (squareOfThree === digit) {
    alert(`${digit} can be obtained by raising the number 3 to a power ${exponent}.`);
} else {
    alert(`${digit} cannot be obtained by raising the number 3 to an integer power.`);
}

