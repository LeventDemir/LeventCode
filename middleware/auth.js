export default ({ store, redirect }) => {
    if (!store.state.admin.auth) {
        return redirect({ name: 'dashboard-login' })
    }
}