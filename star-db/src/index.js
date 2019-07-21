const getResource = async (url) => {
  const res = await fetch(url);

  if(!res.ok) {
    throw new Error(`Server not have this source in ${url}` +
                    ` status ${res.status}`);
  }

  const body = await res.json();
  return body;
}

getResource('https://swapi.co/api/people/123123/')
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.log('Network not work', err);
  })
