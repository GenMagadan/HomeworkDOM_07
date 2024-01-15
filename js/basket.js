async function createWrap() {
  const productBoxAdd = document.querySelector(
    ".product_basket"
  )

  productBoxAdd.classList.add("add-products")

  const cartTitle = document.createElement("h2")
  cartTitle.classList.add("add-products__title")
  cartTitle.textContent = "Ваша корзина"

  const productWrapAdd = document.createElement("div")
  productWrapAdd.classList.add(
    "add-products__products-list"
  )

  const cartWrap = document.createElement("div")
  cartWrap.classList.add("wrap")

  productBoxAdd.appendChild(productWrapAdd)
  productWrapAdd.appendChild(cartTitle)
  productWrapAdd.appendChild(cartWrap)
}

async function add() {
  const cartWrap = document.querySelector(".wrap")
  //   console.log(cartWrap)
  cartWrap.innerHTML = ""
  products_add.forEach(
    ({ name_img, name_product, price_product }) => {
      const productCartAdd = `
<div class="add-product">
<img class="add-product__image" src="./image/foto/${name_img}.png" alt="${name_img}">
<div class="add-product__info">
   <button class="add-product__close"><img src="./image/logo/Vector.svg"></button>
   <h2 class="add-product__name">${name_product}</h2>
   <p class="add-product__price">Price: <span class="add-product__hig">$${price_product}</span></p>
   <p class="add-product__color">Color: Red</p>
   <p class="add-product__size">Size: Xl </p>
   <div class="add-product__input-quantity">
      <span class="add-product__quantity">Quantity: 2</span>
   </div>
</div>
</div>
`
      cartWrap.insertAdjacentHTML(
        "beforeend",
        productCartAdd
      )
    }
  )
  const productCloseElem = document.querySelectorAll(
    ".add-product__close"
  )
  productCloseElem.forEach((el) => {
    el.addEventListener("click", () => {
      const productClose = el.closest(".add-product")
      const card = document.querySelector(".add-product")
      productClose.remove()
      delCart(productClose)
      console.log(products_add.length)
      if (products_add.length === 0) {
        const productBoxAdded = document.querySelector(
          ".product_basket"
        )
        productBoxAdded.classList.remove("add-products")
        productBoxAdded.innerHTML = ""
      }
    })
  })
}
function delCart(card) {
  const cardEl = card.children[0].alt
  //   console.log(cardEl)
  for (let i = 0; i < products_add.length; i++) {
    if (cardEl === products_add[i].name_img) {
      products_add.splice(i, i + 1)
      console.log(products_add)
    }
  }
}
