<template>
  <div class="container">
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <form>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="Full Name" />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="email" placeholder="Email" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="tel" placeholder="Phone" />
              <span class="icon is-small is-left">
                <i class="fas fa-phone"></i>
              </span>
            </p>
          </div>

          <div class="field">
            <div class="control">
              <textarea class="textarea" placeholder="Primary textarea"></textarea>
            </div>
          </div>

          <button class="button is-success">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

