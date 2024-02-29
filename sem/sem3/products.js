// Задание 4 (тайминг 40 минут)
// Вам необходимо создать компонент "Товар", который будет отображать
// информацию о товаре, включая название, описание и цену. Кроме того, вы
// должны реализовать фильтрацию товаров по цене (по возрастанию и
// убыванию)
// 1. Создайте компонент "Товар", который вы создавали в интернет магазине BRAND
// 2. Создайте список товаров, используя компонент "Товар". Данные о
// товарах могут быть представлены в виде массива объектов.
// 3. Добавьте две кнопки сортировки (по убыванию, по возрастанию)
// 4. При нажатии на кнопки, обновите список отображаемых товаров,
//     отфильтрованных по цене.
Vue.component('product', {
    props: ['product'],
    template: `
          <div>
            <img :src="product.image" :alt="product.name" width="100">
            <h3>{{ product.name }}</h3>
            <p>Цена: {{ product.price }}</p>
          </div>
        `
});

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Product List</title>
// <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
// </head>
// <body>
// <div id="app">
//     <product-list :products="products"></product-list>
// </div>
//
// <script>
//     Vue.component('product', {
//     props: ['name', 'description', 'price'],
//     template: `
//         <div class="product">
//           <h3>{{ name }}</h3>
//           <p>{{ description }}</p>
//           <p>Price: ${{ price }}</p>
//         </div>
//       `
// });
//
//     Vue.component('product-list', {
//     props: ['products'],
//     data() {
//     return {
//     sortedProducts: [...this.products]
// };
// },
//     methods: {
//     sortByPrice(order) {
//     this.sortedProducts = [...this.products].sort((a, b) => {
//     return order === 'asc' ? a.price - b.price : b.price - a.price;
// });
// }
// },
//     template: `
//         <div>
//           <button @click="sortByPrice('asc')">Sort by Price (Low to High)</button>
//           <button @click="sortByPrice('desc')">Sort by Price (High to Low)</button>
//           <product v-for="(product, index) in sortedProducts" :key="index"
//                     :name="product.name" :description="product.description" :price="product.price">
//           </product>
//         </div>
//       `
// });
//
//     new Vue({
//     el: '#app',
//     data: {
//     products: [
// { name: 'Product 1', description: 'Description for Product 1', price: 10 },
// { name: 'Product 2', description: 'Description for Product 2', price: 20 },
// { name: 'Product 3', description: 'Description for Product 3', price: 15 },
// { name: 'Product 4', description: 'Description for Product 4', price: 25 },
// { name: 'Product 5', description: 'Description for Product 5', price: 30 }
//     ]
// }
// });
// </script>
// </body>
// </html>
