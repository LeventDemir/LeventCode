<template>
  <div class="columns">
    <div class="column is-full">
      <form @submit.prevent="$store.dispatch('contact/sendMessage', mail)">
        <div class="field">
          <label class="label">Full Name</label>
          <p class="control has-icons-left">
            <input v-model="mail.fullname" class="input" type="text" required />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <p class="control has-icons-left">
            <input v-model="mail.email" class="input" type="email" required />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <label class="label">Phone</label>
          <p class="control has-icons-left">
            <input v-model="mail.phone" class="input" type="tel" required />
            <span class="icon is-small is-left">
              <i class="fas fa-phone"></i>
            </span>
          </p>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea v-model="mail.message" class="textarea" required></textarea>
          </div>
        </div>

        <br />

        <div class="has-text-centered">
          <button class="button is-success">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      mail: {
        fullName: null,
        email: null,
        phone: null,
        message: null
      }
    };
  }
};
</script>