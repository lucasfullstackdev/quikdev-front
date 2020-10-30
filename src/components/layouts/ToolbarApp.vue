<template>
  <b-navbar toggleable="lg" class="border-bottom">
    <b-button
      class="mr-2 d-md-none btn-toggle"
      variant="white"
      @click="emitToggleNav"
    >
      <b-icon icon="justify"></b-icon>
    </b-button>

    <b-navbar-brand
      href="https://accordous.com.br/"
      target="_blank"
      title="Ir para Accordous"
    >
      Soluções em filmes
    </b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {
  name: "toolbar-app",
  methods: {
    emitToggleNav: function () {
      this.$emit("toggleNav");
    },
  },
};
</script>

<style scoped>
.btn-toggle {
  color: var(--quikdev-info) #403181;
}
</style>