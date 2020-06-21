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

                    this.$toast({ text: 'work created', class: 'is-success' })

                    this.$router.push({ name: 'dashboard' })
                } else this.$toast({ text: 'something went wrong', class: 'is-danger' })
            })
    },
    update({ rootGetters, dispatch }, work) {
        this.$axios.post('/work/update', { ...work, token: rootGetters['admin/getToken'] })
            .then(response => {
                if (response.data.success) {
                    dispatch('works')

                    this.$toast({ text: 'work updated', class: 'is-success' })

                    this.$router.push({ name: 'dashboard' })
                } else this.$toast({ text: 'something went wrong', class: 'is-danger' })
            })
    },
    delete({ rootGetters, commit, dispatch }, id) {
        this.$axios.post('/work/delete', { token: rootGetters['admin/getToken'], id })
            .then(response => {
                if (response.data.success) {
                    dispatch('works')

                    this.$toast({ text: 'work deleted', class: 'is-success' })
                } else this.$toast({ text: 'something went wrong', class: 'is-danger' })
            })
    },
    works({ commit }) {
        return this.$axios.get('/work/works').then(response => commit('setWorks', response.data))
    },
    work({ }, id) {
        return this.$axios.get('/work/work', { params: { id } })
    }
}