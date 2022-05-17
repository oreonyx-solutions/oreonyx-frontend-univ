import store from "."


export default {
    setRequestHeaders(token) {
        store.state.config = {
            headers: {
                Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
        }
    },

    saveSessionCredentials({ token, user }) {
        window.sessionStorage.setItem('authToken', token)
        this.saveSessionUserCredentials({ user })
    },

    saveSessionUserCredentials({ user }) {
        window.sessionStorage.setItem('authUser', JSON.stringify(user))
    },

    getSessionCredentials() {
       return {token: window.sessionStorage.getItem('authToken'), user : JSON.parse(window.sessionStorage.getItem('authUser'))}
    },
    removeSessionCredentials() {
        window.sessionStorage.removeItem('authToken')
        window.sessionStorage.removeItem('authUser')
    }
}
