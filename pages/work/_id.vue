 
<template>
  <div class="columns">
    <div class="column is-8 is-offset-2">
      <img class="img" :src="data.photo" />
      <br />
      <br />

      <h1 class="is-size-3">{{ data.title }}</h1>

      <br />

      <div class="article">{{ data.description }}</div>
    </div>
  </div>
</template>


<script>
export default {
  async asyncData({ params, store }) {
    return store.dispatch("work/work", params.id).then(response => {
      return { data: response.data };
    });
  }
};
</script>