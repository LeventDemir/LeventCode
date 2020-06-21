<template>
  <div class="column">
    <form @submit.prevent="$store.dispatch('contact/sendMessage', mail)">
      <div class="field">
        <p class="control has-icons-left">
          <input
            v-model="mail.fullName"
            class="input is-rounded"
            placeholder="Full Name"
            type="text"
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
            v-model="mail.email"
            class="input is-rounded"
            placeholder="Email"
            type="email"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <p class="control has-icons-left">
          <input v-model="mail.phone" class="input is-rounded" placeholder="Phone" type="tel" />
          <span class="icon is-small is-left">
            <i class="fas fa-phone"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <div class="control">
          <textarea v-model="mail.message" class="textarea" placeholder="Message" required></textarea>
        </div>
      </div>

      <br />

      <div class="has-text-centered">
        <button class="button is-link is-outlined is-rounded primary-button">Send</button>
      </div>
    </form>
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