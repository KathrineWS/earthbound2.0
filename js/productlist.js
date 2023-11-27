const url = "https://earthbound-9369.restdb.io/rest/earthbound?max=15";

//API key
const options = {
  headers: {
    "x-apikey": "656435640887e93baa176230",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })

  .catch((e) => {
    console.error("An error occured", e.message);
  });
