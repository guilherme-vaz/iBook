<template>
  <div>
    <p class="book-title">{{ $book.title }}</p>
    <div class="read-container">
      <div class="vertical-container">
        <div
          v-for="page in $book.pages"
          :key="page.id"
          v-html="page.pageNumber"
          class="vertical-pages"
        > 
          <img src="@/assets/img/page.svg" alt="">
        </div>
      </div>
      <!-- Pages -->
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
        <div
          v-for="page in $book.pages"
          :key="page.id"
          class="swiper-pagination"
        >
          {{ page.pageNumber }}
        </div>
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
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
.vertical-pages {
  width: 9vw;
  height: 25vh;
  /* background-color: aquamarine; */
  border: 1px solid rgb(56, 56, 56);
  margin-bottom: 1rem;
  text-align: center;
}

.page-item {
 padding: 2rem;
  background-color: red;
}

.swiper-container {
  width: 600px;
  height: 700px;
  -webkit-box-shadow: 3px 5px 24px 5px rgba(0, 0, 0, 0.32);
  box-shadow: 3px 5px 24px 5px rgba(0, 0, 0, 0.32);
  background-color: #f7f7f7;
  padding-top: 1rem;
}

.read-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.book-title {
  font-weight: bold;
  font-size: 1.3rem;
}

.page-container {
  width: 400px;
  padding: 3rem 5rem;
}
</style>