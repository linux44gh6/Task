const people = [
    { name: "Anika", age: 25, gender: "female" },
    { name: "Rahim", age: 30, gender: "male" },
    { name: "Karim", age: 28, gender: "male" },
    { name: "Sonia", age: 22, gender: "female" },
    { name: "Rafi", age: 35, gender: "male" }
];

const getMaleName=(peoples)=>{
    return peoples.filter(people=>people.gender!='female')
        .map(people=>people.name)
}
const name=getMaleName(people)
console.log(name);