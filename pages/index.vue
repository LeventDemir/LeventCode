<template>
  <div>
    <div class="columns is-multiline is-centered">
      <div v-for="i in 4" :key="i" class="column is-half">
        <Card />
      </div>
    </div>

    <br />
    <br />
    <br />

    <div class="has-text-centered">
      <nuxt-link :to="{name: 'works'}" class="button is-link is-rounded" tag="button">More</nuxt-link>
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