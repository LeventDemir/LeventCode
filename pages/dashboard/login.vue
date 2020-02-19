<template>
  <div class="columns">
    <div class="column is-full">
      <form @submit.prevent="$store.dispatch('admin/login', admin)">
        <div class="field">
          <p class="control has-icons-left">
            <input
              v-model="admin.username"
              class="input"
              type="text"
              placeholder="Username"
              required
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>

        <div class="field">
          <p class="control has-icons-left">
            <input
              v-model="admin.password"
              class="input"
              type="password"
              placeholder="Password"
              required
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <br />

        <div class="has-text-centered">
          <button class="button is-success">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      admin: {
        username: null,
        password: null
      }
    };
  }
};
</script>