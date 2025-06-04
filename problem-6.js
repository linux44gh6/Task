
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function sumEvenNumbers(arr) {
  return arr.reduce((accumulator, current) => {
    if (current % 2 === 0) {
      return accumulator + current;
    }
    return accumulator;
  }, 0);
}


const result = sumEvenNumbers(numbers);
console.log(result);  
