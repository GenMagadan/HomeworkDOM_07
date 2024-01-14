let products_add = []

async function productData() {
  try {
    const response = await fetch("data.json")
    if (!response.ok) {
      throw new Error(
        "Получена ошибка при обработке data.json"
      )
    }
    const data = await response.json()
    console.log(data)
    const feturedItems = document.querySelector(
      ".product_cards"
    )
    data.forEach(
      ({
        class_product,
        image,
        name_img,
        name_product,
        product_description,
        price_product,
      }) => {
        const productCard = `
         <div class="card_product">
            <div class="add-card">
               <div class="${class_product}" style="background-image: url(${image})" "alt="${name_img}"></div>
                  <div class="text_card">
                     <h5>${name_product}</h5>
                     <p class="product-description">${product_description}</p>
                     <p class="price-product">${price_product}</p>
               </div>
            </div>
         </div> `
        feturedItems.insertAdjacentHTML(
          "beforeend",
          productCard
        )
        const btnAdd = document.querySelector(".add-card")
      }
    )
    btnAdd.forEach((element) => {
      element.addEventListener("click", () => {
        const btnAddCard = element.closest(".product")
        const product = {
          image: btnAddCard.children[0].children[1].alt,
          price_product:
            btnAddCard.children[1].children[2].innerHTML.slice(
              1
            ),
          name_product:
            btnAddCard.children[1].children[0].innerHTML,
        }
        if (products_add.length === 0) {
          createWrap()
        }
        products_add.push(product)
        add()
      })
    })
  } catch (error) {
    console.error(error)
  }
}
productData()
