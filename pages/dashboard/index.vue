<template>
  <div class="column">
    <nuxt-link
      :to="{ name: 'dashboard-create' }"
      class="button is-link is-fullwidth is-rounded is-outlined"
      tag="button"
    >
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Create New</span>
    </nuxt-link>

    <br />
    <br />
    <br />

    <div class="columns is-multiline is-centered">
      <div
        v-for="work in $store.getters['work/getWorks']"
        :key="work._id"
        class="column is-one-third"
      >
        <Card :admin="true" :data="work" />
      </div>
    </div>
  </div>
</template>


<script>
import Card from "@/components/card";

export default {
  middleware: "auth",
  components: { Card }
};
</script>