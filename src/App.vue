<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/** 
 * Colors
 * -------------------------------------
 */
:root {
  --quikdev-danger: #ff4081;
  --quikdev-info: #403181;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

a {
  color: var(--quikdev-info) !important;
  text-decoration: none !important;
}
</style>
