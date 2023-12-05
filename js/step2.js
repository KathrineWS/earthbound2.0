const urlParams = new URLSearchParams(window.location.search);
let urlstring = "";
for (const [key, value] of urlParams) {
  //   console.log(key, value);
  urlstring += "&" + key + "=" + value;
}
console.log(urlstring);
document.querySelector(".one").href += urlstring;
document.querySelector(".two").href += urlstring;
document.querySelector(".three").href += urlstring;
