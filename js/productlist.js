const url = "https://earthbound-9369.restdb.io/rest/earthbound?max=15";
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
    handleData(data);
  })

  .catch((e) => {
    console.error("An error occured", e.message);
  });

function handleData(earthbound) {
  earthbound.forEach((product) => {
    //console.log(product)
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    clone.querySelector("h2").textContent = product.product_name;
    clone.querySelector("p").textContent = product.price_from;
    clone.querySelector("img").src = product.productimg_url;
    clone.querySelector(
      ".linkhtml"
    ).href = `productpage.html?id=${product._id}`;
    const mainEl = document.querySelector(".product-list");
    mainEl.appendChild(clone);
  });
}

function init() {
  // getData();
  buildFilters();
}

function buildFilters() {
  const buttons = document.querySelectorAll(".filterbutton");

  buttons.forEach((button) => {
    button.addEventListener("click", filtersystem);
  });
}
function filtersystem() {
  console.log(this.textContent);
  let productfilter = productData.filter((e) =>
    e.category.includes(this.textContent)
  );
  console.log(productfilter);
  document.querySelector(".product-list").innerHTML = "";
  handleData(productfilter);
}

// function catName(singleData) {
//   if (singleData.category.includes("Home")) {
//     return true;
//   } else {
//     false;
//   }
// }

init();

// function filter(e) {
//   console.log(e.target.className);
//   let currentCat = e.target.className;
//   const products = document.querySelectorAll(".outdoor");
//   if (currentCat === ".outdoor") {
//     products.forEach((productEl) => {
//       productEl.classList.remove("hidden");
//     });
//   } else {
//     products.forEach((element) => {
//       if (element.classList.contains(currentCat)) {
//         element.classList.remove("hidden");
//       } else {
//         element.classList.add("hidden");
//       }
//     });
//   }
// }
