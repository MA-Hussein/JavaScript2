const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

const ul = document.createElement('ul');
myHobbies.map(value => {
  let li = document.createElement('li');
  li.innerText = value;
  ul.appendChild(li);
})
document.body.appendChild(ul);