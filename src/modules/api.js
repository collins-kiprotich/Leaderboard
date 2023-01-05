const retrieveAPI = async () => {
  const fetchData = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uivMqf0F6wMWA2bMjW8v/scores/');
  const result = await fetchData.json();
  return result;
};

const setAPI = async (scores) => {
  const fetchData = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uivMqf0F6wMWA2bMjW8v/scores/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(scores),
  });
  const result = await fetchData.json();
  return result;
};

export { retrieveAPI, setAPI };