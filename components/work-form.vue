<template>
  <form @submit.prevent="submit">
    <div class="field">
      <p class="control">
        <input
          v-model="work.title"
          class="input is-rounded"
          type="text"
          placeholder="Title"
          required
        />
      </p>
    </div>

    <div class="field">
      <p class="control">
        <input v-model="work.link" class="input is-rounded" type="text" placeholder="Link" required />
      </p>
    </div>

    <input
      ref="photoInput"
      @change="handleFileUpload"
      class="hide-file-input"
      type="file"
      accept="image/*"
      :required="!work.photo"
    />

    <button
      @click="$refs.photoInput.click()"
      style="border-width: 2px"
      class="button is-success is-outlined is-rounded is-fullwidth"
      type="button"
    >
      <span class="icon is-small">
        <i class="fas fa-camera"></i>
      </span>
      <span>Photo</span>
    </button>

    <br />

    <div class="has-text-centered">
      <button class="button is-link is-outlined is-rounded primary-button">{{ operation }}</button>
    </div>
  </form>
</template>


<script>
export default {
  props: {
    operation: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      work: {
        title: null,
        photo: null,
        link: null
      }
    };
  },
  mounted() {
    if (process.client && this.operation == "update") {
      this.$store
        .dispatch("work/work", this.$route.params.id)
        .then(response => {
          this.work.title = response.data.title;
          this.work.link = response.data.link;
          this.work.photo = response.data.photo;
        });
    }
  },
  methods: {
    handleFileUpload(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      const reader = new FileReader();
      if (files[0].size / (1024 * 1024) < 1) {
        const vm = this;
        reader.onload = e => (vm.work.photo = e.target.result);
        reader.readAsDataURL(files[0]);
        this.work.photo = "";
      } else {
        this.$toast({
          text: "The photo you will upload must be less than 6 MB!",
          class: "is-danger"
        });
      }
    },
    submit() {
      if (this.operation == "create") {
        this.$store.dispatch("work/create", this.work);
      } else {
        this.work.id = this.$route.params.id;
        this.$store.dispatch("work/update", this.work);
      }
    }
  }
};
</script>