// Задание 1
// 1. Создание простого счетчика: Создайте компонент
// счетчика, который имеет кнопку "+" и кнопку "-", и
// отображает текущее значение счетчика. При нажатии на
// кнопки счетчик должен увеличиваться или уменьшаться
// соответственно.

Vue.component('counter', {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
    },
    computed: {
    },
    template: `
<div> 
<button v-on:click="count++">+</button> 
<button v-on:click="count--">-</button> 
<p>{{ count }}</p> 
</div>`
})

// Vue.component('counter', {
//     template:`
//                <div>
//                     <button @click="increment">+</button>
//                     <span>{{ counter }}</span>
//                     <button @click="decrement">-</button>
//               </div>
//           `,
//     data() {
//         return {
//             counter: 0
//         };
//     },
//     methods: {
//         increment() {
//             this.counter++;
//         },
//         decrement() {
//             this.counter--;
//         }
//     }
// });