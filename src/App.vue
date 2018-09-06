<template>
  <div id="app">
    <pcnav></pcnav>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <pcfoot></pcfoot>
  </div>
</template>

<script>
import Nav from "@/components/nav/Nav.vue";
import Footer from "@/components/nav/Footer.vue";

export default {
  name: "home",
  components: {
    pcnav: Nav,
    pcfoot: Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
