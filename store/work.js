export const store = () => ({
    works: []
})

export const getters = {
    getWorks(state) {
        return state.works
    }
}

export const mutations = {
    setWorks(state, works) {
        state.works = works
    }
}

export const actions = {
    create({ rootGetters, dispatch }, work) {
        this.$axios.post('/work/create', { ...work, token: rootGetters['admin/getToken'] })
            .then(response => {
                if (response.data.success) {
                    dispatch('works')
                    // this.$flashMessage({ message: 'Ürün Oluşturuldu', class: 'is-success' })
                    this.$router.push({ name: 'dashboard' })
                } else {
                    // this.$flashMessage({ message: 'Bir hata oluştu!', class: 'is-danger' })
                }
            })
    },
    update({ rootGetters, dispatch }, work) {
        this.$axios.post('/work/update', { ...work, token: rootGetters['admin/getToken'] })
            .then(response => {
                if (response.data.success) {
                    dispatch('works')
                    // this.$flashMessage({ message: 'Ürün Güncellendi', class: 'is-success' })
                    this.$router.push({ name: 'dashboard' })
                } else {
                    // this.$flashMessage({ message: 'Bir hata oluştu!', class: 'is-danger' })
                }
            })
    },
    delete({ rootGetters, commit, dispatch }, id) {
        this.$axios.post('/work/delete', { token: rootGetters['admin/getToken'], id })
            .then(response => {
                if (response.data.success) {
                    dispatch('works')
                    // this.$flashMessage({ message: 'Ürün Silindi', class: 'is-success' })
                } else {
                    // this.$flashMessage({ message: 'Bir hata oluştu!', class: 'is-danger' })
                }
            })
    },
    works({ commit }) {
        return this.$axios.get('/work/works').then(response => {
            commit('setWorks', response.data)
        })
    },
    work({ }, id) {
        return this.$axios.get('/work/work', { params: { id } })
    }
}