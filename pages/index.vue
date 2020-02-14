<template>
  <div class="container">
    <div class="columns is-multiline is-centered">
      <div v-for="i in 4" :key="i" class="column is-6">
        <Card />
      </div>
    </div>

    <br />
    <br />
    <br />

    <div class="has-text-centered">
      <button class="button is-link is-rounded">More</button>
    </div>
  </div>
</template>


<script>
import Card from "@/components/card";

export default {
  components: { Card }
};
</script>