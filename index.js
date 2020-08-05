
for (var n = 1; n < 101; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log(n + " FizzBuzz");
  } else if (n % 3 === 0) {
    console.log(n + " Fizz");
  } else if (n % 5 === 0) {
    console.log(n + " Buzz");
  } else if (isPrime(n) === true) {
    console.log(n + " prime");
  } else {
    console.log(n);
  }
}
// prime numbers function
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  let prime = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return prime;
}
