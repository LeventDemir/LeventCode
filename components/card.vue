<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
        Phasellus nec iaculis mauris.
        Phasellus nec iaculis mauris.
        Phasellus nec iaculis mauris.
        Phasellus nec iaculis mauris.
        Phasellus nec iaculis mauris.
        Phasellus nec iaculis mauris
        Phasellus nec iaculis mauris.
      </div>
      <p>
        <a href>more...</a>
      </p>
    </div>
    <footer v-if="admin" class="card-footer">
      <a href="#" class="card-footer-item has-text-success">Update</a>
      <a href="#" class="card-footer-item has-text-danger">Delete</a>
    </footer>
  </div>
</template>


<script>
export default {
  props: {
    admin: {
      type: Boolean,
      default: false
    }
  }
};
</script>