 <template>
  <div class="presentation">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore dignissimos qui! Nemo sint fugiat, voluptates praesentium facilis odio laudantium repellat similique voluptas at dolor alias eos assumenda sit iure!</p>
      <img src="@/assets/img/presentation.svg" alt="Apresentação de iBook">
  </div>
</template>
 
 
 <style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>