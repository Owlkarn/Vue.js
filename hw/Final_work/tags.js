Vue.component('tag', {
    props: ['tag', 'filterFunction'],
    data() {
        return {
        };
    },
    methods: {
        filterArticles(event) {
            this.filterFunction(this.tag, event);
        }
    },
    computed: {
    },
    template: `<div @click="filterArticles($event)" class="articles-list-block__right_tag">{{ tag }}</div>
`
})