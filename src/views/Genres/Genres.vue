<template>
  <div>
    <h1>Filmes por gênero</h1>

    <br />

    <b-container fluid>
      <!-- Campo de busca -->
      <b-row>
        <b-col sm="2" v-for="(genre, id) in genres" :key="id">
          <router-link
            :key="id"
            :to="{ name: 'genre', params: { id: genre.id } }"
            active-class="active"
            exact
          >
            <div class="tag">{{ genre.name }}</div>
          </router-link>
        </b-col>
      </b-row>

      <!-- Listagem de filmes -->
      <b-row>
        <b-col>
          <div class="container-movies-by-genre">
            <router-view></router-view>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "genres-view",
  data() {
    return {
      axios: require("axios").default,
      url: process.env.VUE_APP_API_URL,
      endPoint: "",

      filter: "",
      genres: [],
      movies: [],
    };
  },
  created() {
    this.getGenres();
  },
  methods: {
    async getGenres() {
      const response = await this.axios.get(`${this.url}/genres`);
      if (response.status == 200) {
        this.genres = response.data.data.genres;
      }
    },
  },
};
</script>


<style scoped>
.tag {
  margin: 5px;
  border: 1px solid var(--quikdev-danger);
}

a.active div {
  background-color: var(--quikdev-danger);
  color: white;
}

.container-movies-by-genre {
  margin-top: 20px;
}
</style>