// Задание 2 (тайминг 30 минут)
// 1. Создайте компонент списка дел, в котором можно
// добавлять и удалять элементы. Каждый элемент списка
// должен иметь кнопку удаления, при нажатии на которую
// элемент списка будет удаляться.

Vue.component('to-do-list', {
    data() {
        return {
            inputText:'',
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
      </div>
    `
})
//
// Vue.component('todo-list', {
//     template: `
//         <div>
//         <input type="text" v-model="newItem" placeholder="Добавить элемент">
//         <button @click="addItem">Добавить</button>
//         <ul>
//           <li v-for="item in items" :key="item.id">
//             {{ item.name }}
//             <button @click="removeItem(item.id)">Удалить</button>
//           </li>
//         </ul>
//       </div>
//       `,
//     data() {
//         return {
//             newItem: '',
//             items: []
//         };
//     },
//     methods: {
//         addItem() {
//             if (this.newItem) {
//                 const newItem = {
//                     id: Date.now(),
//                     name: this.newItem
//                 };
//                 this.items.push(newItem);
//                 this.newItem = '';
//             }
//         },
//         removeItem(itemId) {
//             this.items = this.items.filter(item => item.id !== itemId);
//         }
//     }
// });