<template>
  <div class="columns is-multiline is-centered">
    <div v-for="i in 8" :key="i" class="column is-4">
      <Card />
    </div>
  </div>
</template>


<script>
import Card from "@/components/card";

export default {
  components: { Card }
};
</script>