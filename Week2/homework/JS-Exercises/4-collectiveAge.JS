
const hackYourFutureMembers = [
  { name: 'Wouter', age: 33 },
  { name: 'Federico', age: 32 },
  { name: 'Noer', age: 27 },
  { name: 'Tjebbe', age: 22 },
];


function callback(members) {
  return members.map(member => member.age).reduce((cumulativeAge, memberAge) => cumulativeAge + memberAge, 0);
}

function combineAges(members) {
  return `The collective age of the HYF team is: ${callback(members)}`;
}
console.log(combineAges(hackYourFutureMembers));
