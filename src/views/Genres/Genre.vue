<template>
  <b-container fluid>
    <!-- Listagem de filmes -->
    <MovieCard :movies="movies" />
  </b-container>
</template>

<script>
import MovieCard from "./../../components/layouts/MovieCard.vue";
export default {
  name: "Genre-view",
  components: {
    MovieCard,
  },
  data() {
    return {
      axios: require("axios").default,
      url: process.env.VUE_APP_API_URL,

      movies: [],
    };
  },

  watch: {
    "$route.params.id": function (id) {
      this.getMovies(id);
    },
  },
  created() {
    this.getMovies(this.$route.params.id);
  },
  methods: {
    async getMovies(id) {
      const response = await this.axios.get(`${this.url}/movies/genre/${id}`);
      if (response.status == 200) {
        this.movies = response.data.data.results;
      }
    },
  },
};
</script>