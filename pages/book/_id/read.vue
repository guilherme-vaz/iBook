<template>
  <div>
    <p class="book-title">{{ $book.title }}</p>
    <div class="read-container">
      <!-- <div class="vertical-container">
        <div
          v-for="page in $book.pages"
          :key="page.id"
          v-html="page.pageNumber"
          class="vertical-pages"
        > 
          <img src="@/assets/img/page.svg" alt="">
        </div>
      </div> -->
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
      </div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev">
        <img src="@/assets/img/arrow.svg" alt="Arrow previous" />
      </div>
      <div class="swiper-button-next">
        <img src="@/assets/img/arrow.svg" alt="Arrow next" />
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

<style lang="scss" scoped>
.book-title {
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  text-align: center;
}

.swiper-container {
  width: 600px;
  height: 700px;
  -webkit-box-shadow: 3px 5px 24px 5px rgba(0, 0, 0, 0.32);
  box-shadow: 3px 5px 24px 5px rgba(0, 0, 0, 0.32);
  background-color: #f7f7f7;
  padding-top: 2rem;
  position: relative;
}

.swiper-button-prev {
  z-index: 999;
  position: absolute;
  top: 108vh;
  left: 62vw;
  color: transparent;

  img {
    background-color: #292929;
    padding: 0.3rem;
  }
}

.swiper-button-next {
  z-index: 999;
  position: absolute;
  top: 108vh;
  right: 33.5vw;
  color: transparent;

  img {
    transform: rotate(-180deg);
    background-color: #292929;
    padding: 0.3rem;
  }
}

.page-container {
  width: 400px;
  padding: 3rem 5rem;
}
</style>