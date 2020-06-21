export const actions = {
    sendMessage({ }, message) {
        this.$axios.post('/contact/send-message', message)
            .then(response => {
                if (response.data.success)
                    this.$toast({ text: 'We have received your message and will get back to you as soon as possible.', class: 'is-success' })

                else this.$toast({ text: 'something went wrong', class: 'is-danger' })
            })
    }
}