const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get("id");
console.log(id);

const scottJacket = document.querySelector(".scott-jacket");
const jacketInfo = document.querySelector(".jacket-info");

async function singleJacket() {
  try {
    const response = await fetch(
      `https://stinenygren.no/wpapi/wp-json/wc/store/products/${id}`
    );
    const result = await response.json();
    console.log(result);
    scottJacket.innerHTML = `
    <img class="scott-img" src="${result.images[0].src}" alt="">
    `;
    jacketInfo.innerHTML = `
    <h1 class="bold scott-header">${result.name}</h1>
    <p class="scott-price">${result.price_html}</p>
    `;
  } catch (error) {
    console.log(error);
  }
}

singleJacket();
