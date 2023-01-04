import './style.css';

const scores = [
  {
    name: 'Abraham',
    score: 200,
  },
  {
    name: 'Collins',
    score: 223,
  },
  {
    name: 'Vincent',
    score: 330,
  },
  {
    name: 'Pauline',
    score: 800,
  },
  {
    name: 'Milcah',
    score: 199,
  },
  {
    name: 'Kipsiil',
    score: 100,
  },

];

const element = document.createElement('li');

const render = () => {
  scores.forEach((item, index) => {
    element.innerHTML += `
      <li class='litem ${index % 2 !== 0 ? 'item' : 'item1'}' >
    <label class='lname'> ${item.name} : </label> 
    <label class='lscore'> ${item.score} </label>
  </li>
      
      `;
  });
};
window.onload = () => {
  render();
  document.querySelector('#left').appendChild(element);
};