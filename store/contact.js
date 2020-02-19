export const actions = {
    sendMessage({ }, message) {
        this.$axios.post('/contact/send-message', message)
            .then(response => {
                if (response.data.success) {
                    // this.$flashMessage({ message: 'Mesajınız bize ulaştı mümkün olan en kısa sürede size geri dönüş yapacağız.', class: 'is-success' })
                } else {
                    // this.$flashMessage({ message: 'Bir hata oluştu', class: 'is-danger' })
                }
            })
    }
}