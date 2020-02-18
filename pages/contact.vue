<template>
  <div class="columns">
    <div class="column is-full">
      <form>
        <div class="field">
          <label class="label">Full Name</label>
          <p class="control has-icons-left">
            <input class="input" type="text" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <p class="control has-icons-left">
            <input class="input" type="email" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <label class="label">Phone</label>
          <p class="control has-icons-left">
            <input class="input" type="tel" />
            <span class="icon is-small is-left">
              <i class="fas fa-phone"></i>
            </span>
          </p>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea"></textarea>
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

