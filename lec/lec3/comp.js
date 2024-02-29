Vue.component('new-component', {
    data() {
        return {

        }
    },

    template:`
<div>
<h3>Заголовок</h3>
<p>Новый шаблон для vue</p>
</div>`,
});

Vue.component('standart-comp', {
    data() {
        return { message: 'text message' };
    },
    methods: {
        newInfo() {
            console.log('hello methods');
        },
    },
    computed: {
        newComp() {
            return this.message;
        }
    },
    template: '<h2>standart template</h2>'
})