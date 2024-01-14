async function createWrap() {
  const productBoxAdd = document.querySelector(
    ".product_basket"
  )

  productBoxAdd.classList.add("add-products")
  productBoxAdd.classList.add("center")

  const cartTitle = document.createElement("h2")
  cartTitle.classList.add("add-products__title")
  cartTitle.textContent = "Cart Items"

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
  console.log(cartWrap)
  cartWrap.innerHTML = ""
  products_add.forEach(
    ({ image, name_img, name_product, price_product }) => {
      const productCartAdd = `
<div class="add-product">
<img class="add-product__image" src="./image/foto/${image}}" alt="${name_img}">
<div class="add-product__info">
   <button class="add-product__close"><img src="./image/close.svg"></button>
   <h2 class="add-product__name">${name_product}</h2>
   <p class="add-product__price">Price: <span class="add-product__hig">$${price_product}</span></p>
   <p class="add-product__color">Color: Red</p>
   <p class="add-product__size">Size: Xl </p>
   <div class="add-product__input-quantity">
      <span class="add-product__quantity">Quantity: </span><input class="add-product__input"
         type="number">
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
  productCloseElem.forEach((elem) => {
    elem.addEventListener("click", () => {
      const productClose = elem.closest(".add-product")
      const cart = document.querySelector(".add-product")
      productClose.remove()
      delCart(productClose)
      if (products_add.length === 0) {
        const productBoxAdd = document.querySelector(
          ".product__box-add"
        )
        productBoxAdd.classList.remove("add-products")
        productBoxAdd.classList.remove("center")
        productBoxAdd.innerHTML = ""
      }
    })
  })
}

function delCart(cart) {
  const cartEl = cart.children[0].alt
  for (let i = 0; i < products_add.length; i++) {
    if (cartEl === products_add[i].productImage) {
      products_add.splice(i, i + 1)
      console.log(products_add)
    }
  }
}
