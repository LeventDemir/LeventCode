<template>
  <div>
    <div class="columns is-multiline is-centered">
      <div v-for="work in $store.getters['work/getWorks']" :key="work._id" class="column is-half">
        <Card :data="work" />
      </div>
    </div>

    <br />
    <br />
    <br />

    <div class="has-text-centered">
      <nuxt-link :to="{ name: 'works' }" class="button is-link is-rounded" tag="button">More</nuxt-link>
    </div>
  </div>
</template>


<script>
import Card from "@/components/card";

export default {
  layout: "home",
  components: { Card }
};
</script>