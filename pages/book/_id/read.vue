<template>
  <div>
    <h1>Leitura</h1>
    <p>{{ $book.title }}</p>
    <p>{{ $book.id }}</p>
    <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div
          v-for="page in $book.pages"
          :key="page.id"
          v-html="page.text"
          class="swiper-slide page-container"
        ></div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper, { Navigation, Pagination } from 'swiper'
import { books } from '@/store'
import 'swiper/swiper-bundle.css'
Swiper.use([Navigation, Pagination])

export default Vue.extend({
  layout: 'ibook',

  computed: {
    $book() {
      return books.$single
    },
  },
  mounted() {
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
})
</script>

<style scoped>
.swiper-container {
  width: 600px;
  height: 600px;
}

.page-container {
  width: 400px;
  background-color: rgb(243, 159, 159);
  padding: 3rem 5rem;
}
</style>