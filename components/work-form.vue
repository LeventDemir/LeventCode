<template>
  <form @submit.prevent="submit">
    <div class="field">
      <p class="control">
        <input v-model="work.title" class="input" type="text" placeholder="Title" required />
      </p>
    </div>

    <div class="field">
      <div class="control">
        <textarea
          v-model="work.description"
          class="textarea"
          placeholder="Primary textarea"
          required
        ></textarea>
      </div>
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
      class="button is-primary is-outlined is-fullwidth bold-border"
      type="button"
    >
      <span class="icon is-small">
        <i class="fas fa-camera"></i>
      </span>
      <span>Photo</span>
    </button>

    <br />

    <button class="button is-success">{{ operation }}</button>
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
        description: null,
        photo: null
      }
    };
  },
  mounted() {
    if (process.client && this.operation == "update") {
      this.$store
        .dispatch("work/work", this.$route.params.id)
        .then(response => {
          this.work.title = response.data.title;
          this.work.description = response.data.description;
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