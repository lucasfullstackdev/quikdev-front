<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <!-- Menu lateral -->
        <MenuLateral :activatedNav="activatedNav" @toggleNav="toggleNav" />

        <div class="col p-0">
          <!-- Header -->
          <ToolbarApp @toggleNav="toggleNav" />

          <!-- Div onde serão exibidos os conteúdos das views -->
          <div class="container-app">
            <div class="content-app">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToolbarApp from "./../components/layouts/ToolbarApp.vue";
import MenuLateral from "./../components/layouts/MenuLateral.vue";
export default {
  name: "app-main",
  components: {
    ToolbarApp,
    MenuLateral,
  },
  data() {
    return {
      activatedNav: true,
    };
  },
  methods: {
    toggleNav() {
      this.activatedNav = !this.activatedNav;
    },
  },
};
</script>

<style scoped>
.container-app {
  width: 100%;
  height: calc(100vh - 60px);
  padding: 10px !important;

  overflow: auto;
}
</style>