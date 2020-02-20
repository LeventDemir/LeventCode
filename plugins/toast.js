import Vuex from 'vuex'
import Vue from 'vue'

const x = document.getElementById('toast')

const toast = data => {
    x.classList.add('show')
    x.classList.add(data.class)
    x.innerText = data.text

    setTimeout(() => {
        x.classList.remove('show')
        x.classList.remove(data.class)
        x.innerText = ""
    }, 5000);
}

Vuex.Store.prototype.$toast = toast
Vue.prototype.$toast = toast 