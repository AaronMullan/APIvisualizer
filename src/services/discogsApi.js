export const getRecord = (id) => {
  return fetch(`https://api.discogs.com/releases/${id}`)
    .then(res => res.json())
    .then(({ data }) => data.map (({ artist, title }) => ({ artist, title })));
};
