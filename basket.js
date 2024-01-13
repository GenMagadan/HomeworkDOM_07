async function productData() {
  try {
    const response = await fetch("basket.json")
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
      ({ photo, name, price, color, size, quantity }) => {
        const container = `
         <div class="container">
         <button class="remove_card"></button>
          <div class="card">
            <img class="image_product" src="${photo}" alt="${name}">
            <div class="content">
               <p class="name_product">${name}</p>
               <p class="price">Price: <span class="summ_price">$${price}</span></p>
               <p class="color">Color: <span class="name_color">${color}</span></p>
               <p class="size">Size: <span class="size_product">${size}</span></p>
               <div class="quantity">
                  <label for="number_quantity">Quantity:</label>
                  <input id="number_quantity" type="text" value="${quantity}">
               </div>
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
