<template>
  <div class="columns is-multiline is-centered">
    <div
      v-for="work in $store.getters['work/getWorks']"
      :key="work._id"
      class="column is-one-third"
    >
      <Card :data="work" />
    </div>
  </div>
</template>


<script>
import Card from "@/components/card";

export default {
  components: { Card }
};
</script>