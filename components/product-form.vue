<template>
  <form>
    <div class="field">
      <p class="control">
        <input class="input" type="text" placeholder="Title" />
      </p>
    </div>

    <div class="field">
      <div class="control">
        <textarea class="textarea" placeholder="Primary textarea"></textarea>
      </div>
    </div>

    <input ref="photoInput" class="hide-file-input" type="file" accept="image/*" />

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

    <button class="button is-success">Create</button>
  </form>
</template>

