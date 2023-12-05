const urlParams = new URLSearchParams(window.location.search);
const price = urlParams.get("price");
const category = urlParams.get("category");
const numoptions = urlParams.get("options");
const url = `https://earthbound-9369.restdb.io/rest/earthbound?q={"price_from":{ "$lt": ${price} }, "category": {"$regex" :"${category}"}}&max=${numoptions}`;
let productData;
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
    productData = data;
    console.log(data);
    // handleData(data);
  })

  .catch((e) => {
    console.error("An error occured", e.message);
  });
