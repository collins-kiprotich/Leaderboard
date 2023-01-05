import './style.css';

import './style.css';
import render from './modules/render.js';
import { retrieveAPI, setAPI } from './modules/api.js';

const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');

const getScore = async () => {
  const scores = await retrieveAPI();
  render(scores);
};

submit.addEventListener('click', async (event) => {
  event.preventDefault();
  const username = document.getElementById('name');
  const userscore = document.getElementById('score');
  const score = {
    user: username.value,
    score: userscore.value,
  };
  username.value = '';
  userscore.value = '';
  await setAPI(score);
});

refresh.addEventListener('click', async () => {
  getScore();
});

getScore();
