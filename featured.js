async function productData() {
   try {
      const response = await fetch("data.json");
      if (!response.ok) {
         throw new Error("Получена ошибка при обработке data.json");
      }
      const data = await response.json();
      console.log(data);
      const feturedItems = document.querySelector('.product_cards');
      data.forEach(({ class_product, image, name_img, name_product, product_description, price_product }) => {
         const productCard =
            `
            <div class="${class_product}" style="background-image: url(${image})" "alt="${name_img}"></div>
            <div class="text_card">
               <h5>${name_product}</h5>
               <p class="product-description">${product_description}</p>
               <p class="price-product">${price_product}</p>
            </div>
         `
         feturedItems.insertAdjacentHTML("beforeend", productCard);
      });
   } catch (error) {
      console.error(error);
   }
}
productData();