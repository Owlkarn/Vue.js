// Задание 3
// 1. Создайте компонент списка, который отображает массив
// элементов. Добавьте текстовое поле для фильтрации
// списка. При вводе текста в поле, список должен
// автоматически обновляться, отображая только элементы,
//     содержащие введенный текст.

Vue.component('filter-li', {
    data() {
        return {
            inputText:'',
            findText: null,
            liItems: [],
        };
    },
    methods: {
        addLi() {
            this.liItems.push(this.inputText);
            this.inputText = '';
        },
        removeEl(index) {
            this.liItems.splice(index, 1);
        }
    },
    computed: {
        findItems() {
            if (this.findText === '')
                return null
            return this.liItems.filter(item => item.includes(this.findText));
        }
    },
    template: `
      <div>
        <input type="text" v-model="inputText">
        <button @click="addLi">Добавить</button>
        <ul>
          <li v-for="(item, index) in liItems" :key="index">
            {{ item }} <button @click="removeEl(index)">Удалить</button>
          </li>
        </ul>
        <input type="text" v-model="findText">
        <ul>
          <li v-for="(item, index) in findItems" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    `
})

// Vue.component('list-filter', {
//     template: `
//     <div>
//     <input type="text" v-model="filterText" placeholder="Фильтр">
//     <ul>
//       <li v-for="item in filteredList" :key="item.id">{{ item.name }}</li>
//     </ul>
//   </div>
//   `,
//     data() {
//         return {
//             filterText: '',
//             items: [
//                 { id: 1, name: 'list 1' },
//                 { id: 2, name: 'list 2' },
//                 { id: 3, name: 'list 3' }
//             ]
//         };
//     },
//     computed: {
//         filteredList() {
//             return this.items.filter(item => item.name.toLowerCase().includes(this.filterText));
//         }
//     }
// });
//
// new Vue({
//     el: '#app'
// });