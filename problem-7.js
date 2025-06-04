
 // A year is a leap year if:
  // 1. It is divisible by 4
  // 2. It is not divisible by 100, unless it is also divisible by 400
function isLeapYear(year) {
  
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage
console.log(isLeapYear(2020)); 
console.log(isLeapYear(2021)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000)); 
