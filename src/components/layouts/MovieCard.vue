<template>
  <b-row>
    <b-col md="4" lg="3" v-for="(movie, id) in movies" :key="id">
      <b-card
        v-if="movie.poster_path"
        :title="movie.title"
        :img-src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
        img-alt="Image"
        img-top
        class="my-3 card"
      >
        <b-card-text>
          <hr />
          <h6>{{ movie.release_date }}</h6>
          <b-button block variant="success" @click="details(movie.id)"
            >Detalhes</b-button
          >
        </b-card-text>

        <div class="overview">
          <p>{{ movie.overview }}</p>
        </div>

        <div class="vote-average">{{ movie.vote_average }}</div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "movie-card",
  props: {
    movies: {
      type: Array,
    },
  },

  methods: {
    details(id) {
      this.$router.push({ name: "movie", params: { id: id } });
    },
  },
};
</script>


<style scoped>
h4 {
  font-size: 1rem;
  font-weight: bold;
}
.vote-average {
  position: absolute;
  top: 10px;
  right: 10px;

  padding: 2px 5px;
  border-radius: 5px;
  background: var(--quikdev-danger);
  color: white;
}

.overview {
  cursor: pointer;

  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 100px;
  opacity: 0;

  background: rgba(255, 255, 255, 1);

  text-align: left;
}

.card:hover .overview {
  opacity: 1;
  padding: 50px 10px 10px 10px;
  transition: all 0.3s ease-in-out;
}
</style>