<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link
        :to="{ name: 'index' }"
        class="navbar-item is-size-3"
        style="color: #3273dc"
        tag="div"
      > { Levent: Code } </nuxt-link>

      <a
        role="button"
        id="burgerButton"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item" tag="div">Home</nuxt-link>
        <nuxt-link
          @click.native="close"
          :to="{ name: 'about-me' }"
          class="navbar-item"
          tag="div"
        >About me</nuxt-link>
        <nuxt-link
          @click.native="close"
          :to="{ name: 'contact' }"
          class="navbar-item"
          tag="div"
        >Contact</nuxt-link>
        <nuxt-link
          v-if="$store.getters['admin/getAuth']"
          :to="{ name: 'dashboard' }"
          @click.native="close"
          class="navbar-item"
          tag="div"
        >Dashboard</nuxt-link>
        <div v-if="$store.getters['admin/getAuth']" @click="logout" class="navbar-item">Logout</div>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  mounted() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  },
  methods: {
    close() {
      document
        .getElementById("navbarBasicExample")
        .classList.toggle("is-active");

      document.getElementById("burgerButton").classList.toggle("is-active");
    },
    logout() {
      this.$store.dispatch("admin/logout");
      this.close();
    }
  }
};
</script>