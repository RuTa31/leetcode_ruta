// Бодлого: N хүртэлх бүх тооны нийлбэр олох
function sumNumbers(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Хэрэглэгчээс оруулах
const inputNumber = 10;
console.log(
  `1-ээс ${inputNumber} хүртэлх тооны нийлбэр:`,
  sumNumbers(inputNumber)
);

// npx ts-node src/index.ts
