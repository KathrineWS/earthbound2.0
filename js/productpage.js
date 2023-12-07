const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
//console.log(id);

const url = `https://earthbound-9369.restdb.io/rest/earthbound/${id}`;

//API key
const options = {
  headers: {
    "x-apikey": "656435640887e93baa176230",
  },
};
//console.log(options);

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

function handleData(product) {
  console.log(product);
  document.querySelector("h2").textContent = product.product_name;
  document.querySelector(".product_img").src = product.productimg_url;
  document.querySelector(".description").textContent = product.description;
  document.querySelector(".pricespan").textContent = product.price_from;
}
