<script>
export default {
  name: "GalleryComponent",
  data() {
    return {
      images: [
        'https://i.7fon.org/150/f55644279.jpg',
        'https://i.7fon.org/150/u438149.jpg',
        'https://i.7fon.org/150/g860911.jpg'
      ],
      currentIndex: 0
    };
  },
}
</script>

<template>
  <div class="gallery">
    <img :src="images[currentIndex]" class="galley__main-img">
    <div class="gallery__imgs">
      <img class="gallery__imgs_mini-img" v-for="(image, index) in images" :key="index" @click="currentIndex=index" :src='image'>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  &__imgs {
    &_mini-img {
      width: 100px;
    }
  }
}
</style>