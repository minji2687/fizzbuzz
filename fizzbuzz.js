// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("fuzz");
//   } else {
//     console.log(i);
//   }
// }

let arr = new Array(100).fill(0);
arr.forEach((el, index) => {
  let num = index + 1;
  if (num % 3 === 0) {
    console.log("fizz");
  } else if (num % 5 === 0) {
    console.log("fuzz");
  } else {
    console.log(num);
  }
});
