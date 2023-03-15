const productFrame = document.querySelector(".product-frame");

async function getJackets() {
  try {
    const response = await fetch(
      "https://stinenygren.no/wpapi/wp-json/wc/store/products"
    );
    const result = await response.json();
    console.log(result);

    result.forEach((jacket) => {
      getJacket(jacket);
    });
  } catch (error) {
    console.log(error);
  }
}

getJackets();

function getJacket(jacket) {
  const jacketObj = {
    id: jacket.id,
    name: jacket.name,
    image: jacket.images.src,
    price: jacket.price_html,
  };
  productFrame.innerHTML += `
  <a href="./jacket.html?id=${jacketObj.id}" class="product">
       <img class="product-img" src="${jacket.images[0].src}" alt="">
       <h2>${jacket.name}</h2>
       <p>${jacket.price_html}</p>
       </a>
       
      `;
}
