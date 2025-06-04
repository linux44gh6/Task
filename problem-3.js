
function square(num) {
  return num * num;
}


function double(num) {
  return num * 2;
}


function addFive(num) {
  return num + 5;
}


function composedFunction(num) {
  const squared = square(num);
  const doubled = double(squared);
  const result = addFive(doubled);
  return result;
}


console.log(composedFunction(5));

