const cookie = require('js-cookie')

export const state = () => ({
    auth: null,
    token: null
})

export const getters = {
    getAuth(state) {
        return state.auth
    },
    getToken(state) {
        return state.token
    }
}

export const mutations = {
    setAuth(state, auth) {
        state.auth = auth
    },
    setToken(state, token) {
        state.token = token
    }
}

export const actions = {
    login({ commit }, admin) {
        this.$axios.post('/admin/login', admin)
            .then(response => {
                if (response.data.token) {
                    cookie.set('token', response.data.token)
                    commit('setToken', response.data.token)
                    commit('setAuth', true)

                    this.$flashMessage({ message: 'Giriş Yapıldı', class: 'is-success' })
                    this.$router.push({ name: 'dashboard' })
                } else {
                    this.$flashMessage({ message: 'Kullanıcı adı yada şifrenizi yanlış girdiniz!', class: 'is-danger' })
                }
            })
    },
    logout({ getters, commit }) {
        this.$axios.post('/admin/logout', { token: getters.getToken }).then(response => {
            if (response.data.success) {
                cookie.remove('token')
                commit('setToken', null)
                commit('setAuth', false)

                this.$flashMessage({ message: 'Çıkış Yapıldı', class: 'is-success' })
                this.$router.push({ name: 'dashboard-login' })
            } else {
                this.$flashMessage({ message: 'Bir hata oluştu!', class: 'is-danger' })
            }
        })
    },
    isAuth({ getters, commit }) {
        return this.$axios.get('/admin/is-auth', { params: { token: getters.getToken } })
            .then(response => commit('setAuth', response.data.auth))
    }
}