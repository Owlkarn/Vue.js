Vue.component('articles-list', {
    props: ['article'],
    data() {
        return {
        };
    },
    methods: {
    },
    computed: {
    },
    template: `
<article class="articles-list__article" xmlns="http://www.w3.org/1999/html">
    <h3 class="articles-list__article_title">{{ article.firstTitle }}</h3>
    <img class="articles-list__article_img" :src="article.firstImg">
    <div class="articles-list__article_date-n-path">
        <p class="articles-list__article_date">{{ article.date }}</p>
        <p class="articles-list__article_path">Interior / Home / Decore</p>
    </div>
    <p class="articles-list__article_paragraph">{{ article.firstParagraph }}</p>
    <p v-if="article.secondParagraph" class="articles-list__article_paragraph">{{ article.secondParagraph }}</p>
    <div v-if="article.quote" class="articles-list__article_quote">
        <p class="articles-list__article_quote-symbol">“</p>
        <p class="articles-list__article_quote-text">The details are not the details. They make the design.</p>
    </div>
    <h3 v-if="article.secondTitle" class="articles-list__article_title">{{ article.secondTitle }}</h3>
    <p v-if="article.thirdParagraph" class="articles-list__article_paragraph">{{ article.thirdParagraph }}</p>
    <div v-if="article.paragraphList" v-for="(paragraph, index) in article.paragraphList" :key="index" class="articles-list__article_paragraph-list">
        <p class="articles-list__article_paragraph-number">{{ index+1 }}</p>
        <p class="articles-list__article_paragraph">{{ paragraph }}</p>
    </div>
    <img v-if="article.secondImg" class="articles-list__article_img" :src="article.secondImg">
    <p v-if="article.fourthParagraph" class="articles-list__article_paragraph">{{ article.fourthParagraph }}</p>
</article>
    `
})