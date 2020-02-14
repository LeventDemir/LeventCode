<template>
  <div class="container">
    <div class="columns">
      <div class="column is-full">
        <nuxt-link
          :to="{ name: 'dashboard-create' }"
          class="button is-success is-fullwidth"
          tag="button"
        >
          <span class="icon is-small">
            <i class="fas fa-plus"></i>
          </span>
          <span>Create New</span>
        </nuxt-link>
      </div>
    </div>

    <br />
    <br />

    <div class="columns is-multiline is-centered">
      <div v-for="i in 8" :key="i" class="column is-4">
        <Card :admin="true" />
      </div>
    </div>
  </div>
</template>


<script>
import Card from "@/components/card";

export default {
  components: { Card }
};
</script>