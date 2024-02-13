let digit;
do {
  if (digit !== undefined) {
    alert("Please enter the correct number");
  }
  digit = parseInt(prompt("Enter the number"));
} while (isNaN(digit));
let isPrime = true;
if (digit >= 1) {
  for (let i = 2; i <= Math.sqrt(digit); i++) {
    if (digit % i === 0) {
      isPrime = false;
      break;
    }
  }
} else {
  alert("A number is not a prime number");
}
alert(isPrime ? "The number is prime" : "A number is not a prime number");