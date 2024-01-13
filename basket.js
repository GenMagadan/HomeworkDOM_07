async function productData() {
  try {
    const response = await fetch("data.json")
    if (!response.ok) {
      throw new Error(
        "Получена ошибка при обработке basket.json"
      )
    }
    const data = await response.json()
    console.log(data)
    const containerBox = document.querySelector(
      ".container_box"
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
        const container = `
         <div class="container">
         <button class="remove_card"></button>
         <div class="card_product">
         <div class="${class_product}" style="background-image: url(${image})" "alt="${name_img}"></div>
            <div class="text_card">
               <h5>${name_product}</h5>
               <p class="product-description">${product_description}</p>
               <p class="price-product">${price_product}</p>
         </div>
      </div>
         `
        containerBox.insertAdjacentHTML(
          "beforeend",
          container
        )
      }
    )
    const buttonEl = document.querySelectorAll("button")
    buttonEl.forEach((el) => {
      el.addEventListener("click", () => {
        const delProd = el.closest(".container")
        delProd.remove()
        // console.log(delProd);
      })
    })
  } catch (error) {
    console.error(error)
  }
}
productData()
