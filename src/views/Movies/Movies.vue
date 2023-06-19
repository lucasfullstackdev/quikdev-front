<template>
  <div>
    <h1>Busca de filmes</h1>

    <br />

    <b-container fluid>
      <!-- Campo de busca -->
      <b-row>
        <b-col sm="10">
          <b-form-input v-model="filter" placeholder="Pesquisar"></b-form-input>
        </b-col>
        <b-col sm="2">
          <b-button block variant="success" @click="searchMovie"
            >Buscar</b-button
          >
        </b-col>
      </b-row>

      <!-- Listagem de filmes -->
      <MovieCard :movies="movies" />
    </b-container>
  </div>
</template>

<script>
import MovieCard from "./../../components/layouts/MovieCard.vue";
export default {
  name: "movies-view",
  components: {
    MovieCard,
  },
  data() {
    return {
      axios: require("axios").default,
      url: process.env.VUE_APP_API_URL,
      endPoint: "",

      filter: "",
      movies: [],
    };
  },
  created() {
    this.getTrending();
  },

  methods: {
    async getTrending() {
      const response = await this.axios.get(`${this.url}/trends`);
      if (response.status == 200) {
        this.movies = response.data.data.results;
      }
    },
    async searchMovie() {
      if (this.filter.length < 3) return this.getTrending();

      const response = await this.axios.get(
        `${this.url}/movies?query=${this.filter}`
      );

      if (response.status == 200) {
        this.movies = response.data.data.results;
      }
    },
  },
};
</script>
