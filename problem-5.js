
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];


function updateAgeByName(arr, targetName, newAge) {
  const person = arr.find(p => p.name === targetName);
  if (person) {
    person.age = newAge;
  } else {
    console.log(`Person with name ${targetName} not found.`);
  }
  console.log(arr);
}

updateAgeByName(people, 'Bob', 40);
