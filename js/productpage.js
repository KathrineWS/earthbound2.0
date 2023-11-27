const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = `https://earthbound-9369.restdb.io/rest/earthbound/${id}`;

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
    handleData(data);
  })
  .catch((e) => {
    console.error("an error occured:", e.message);
  });
