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
            </b-card-text>

            <div class="overview">
              <p>{{ movie.overview }}</p>
            </div>

            <div class="vote-average">{{ movie.vote_average }}</div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "movies-view",
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
      console.log(response.data);
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
  bottom: 0px;
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