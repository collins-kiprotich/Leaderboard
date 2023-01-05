export default (arr) => {
    const scoreListContainer = document.getElementById('scores-container');
    scoreListContainer.innerHTML = '';
    arr.result.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `${item.user}: ${item.score}`;
      scoreListContainer.appendChild(li);
    });
  };