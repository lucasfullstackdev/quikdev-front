<template>
  <div>
    <b-container fluid>
      <!-- header -->
      <b-row class="header">
        <div class="teste"></div>
        <div
          class="background"
          :style="{ backgroundImage: `url(${background})` }"
        ></div>
        <!-- imagem do filme -->
        <b-col sm="3" class="p-0">
          <img
            :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
            alt=""
          />
        </b-col>

        <b-col class="p-0">
          <div class="container-details">
            <div class="details">
              <h1>{{ movie.title }}</h1>
              <ul class="p-0">
                <li>{{ movie.release_date }}</li>
                <li>
                  {{ movie.genres }}
                </li>
              </ul>

              <h4>{{ Math.abs(movie.vote_average * 10) }}%</h4>
              <h6>{{ movie.tagline }}</h6>
              <h2>Sinopse</h2>
              <p>{{ movie.overview }}</p>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h2 class="py-2">Elenco</h2>
          <b-row>
            <b-col sm="2" md="3" lg="3" v-for="(cast, id) in casts" :key="id">
              <b-card
                :title="cast.name"
                :img-src="
                  'https://image.tmdb.org/t/p/w500/' + cast.profile_path
                "
                img-alt="Image"
                img-top
                class="my-3 card"
              >
                <b-card-text>
                  {{ cast.character }}
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "movie-view",
  data() {
    return {
      axios: require("axios").default,
      url: process.env.VUE_APP_API_URL,
      movie: {},
      casts: [],
      background: "",
    };
  },
  watch: {
    "$route.params.id": function (id) {
      this.getMovie(id);
    },
  },
  created() {
    this.getMovie(this.$route.params.id);
    this.getCasts(this.$route.params.id);
  },
  methods: {
    async getMovie(id) {
      const response = await this.axios.get(`${this.url}/movies/${id}`);

      if (response.status == 200) {
        this.movie = response.data.data;
      }

      const genres = this.movie.genres.map(({ name }) => name);
      this.movie.genres = genres.join(", ");

      this.background = `https://image.tmdb.org/t/p/original/${this.movie.backdrop_path}`;

      console.clear();
      console.log(this.movie);
    },
    async getCasts(id) {
      const response = await this.axios.get(`${this.url}/movies/${id}/casts`);
      if (response.status == 200) {
        this.casts = response.data.data.cast;
      }

      this.casts = this.casts.filter((cast) => cast.profile_path);
    },
  },
};
</script>


<style scoped>
.header {
  padding: 20px;
  position: relative;
}

.teste {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  background: black;
}

.background {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  opacity: 0.2;
  background-size: 100% auto;
  background-repeat: no-repeat;
}

img {
  width: 100%;
}

.container-details {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.details {
  width: 100%;
  min-height: 300px;
  height: auto;

  padding: 0px 70px;

  text-align: left;
  color: white;
}

.details h1 {
  text-align: center;
}

.details ul li:first-child {
  margin-left: 0px;
}
.details ul li {
  float: left;
  margin-left: 25px;
}

.details h4 {
  clear: both;
  margin-top: 60px;
}
</style>