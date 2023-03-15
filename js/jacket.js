const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get("id");

const scottJacket = document.querySelector(".scott-jacket");

async function singleJacket() {
  try {
    const response = await fetch(
      `https://stinenygren.no/wpapi/wp-json/wc/store/products/${id}`
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

singleJacket();
