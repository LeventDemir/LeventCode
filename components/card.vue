<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="data.photo" />
      </figure>
    </div>
    <div class="card-content has-text-centered">
      <a :href="data.link" target="_blank" class="is-size-5">{{ data.title }}</a>
    </div>
    <footer v-if="admin" class="card-footer">
      <nuxt-link
        :to="{ name: 'dashboard-update-id', params: { id: data._id } }"
        class="card-footer-item has-text-success"
        tag="a"
      >Update</nuxt-link>
      <a
        @click="$store.dispatch('work/delete', data._id)"
        class="card-footer-item has-text-danger"
      >Delete</a>
    </footer>
  </div>
</template>


<script>
export default {
  props: {
    admin: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      required: true
    }
  }
};
</script>