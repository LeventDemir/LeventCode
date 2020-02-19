export const actions = {
    async nuxtServerInit({ commit, dispatch }, { req }) {
        const tokenIndex = await req.rawHeaders.findIndex(item => item.substr(0, 5) == 'token')

        if (tokenIndex > -1) {
            const token = await req.rawHeaders[tokenIndex].substr(6)

            await commit("admin/setToken", token)

            await dispatch('admin/isAuth')
        }

        await dispatch('work/works')
    }
}