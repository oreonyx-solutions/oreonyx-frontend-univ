import { reactive } from 'vue'
import apiCallMethods from './api-call-methods'
import authMethods from './auth-methods'
import notificationMethods from './notification-methods' 

const state = reactive ({
    user: {},
    establishment: {},
    isAuth: false,
    toggleWorkSpace:false,
    device: {
        id: null,
        token: null,
        platform: null
    },
    uploadUrl: 'http://34.77.255.36:4000/',
    apiUrl: 'http://34.77.255.36:4000/api/',
    config: {
       
    }
})

const methods = {
    storeUser (user) {
        state.user = user
    },

    // storeDevice (device) {
    //     state.device.id = device.id,
    //     state.device.token = device.token,
    //     state.device.platform = device.platform
    // },
    storeDeviceId (id) {
        state.device.id = id
    },
    storeDeviceToken (token) {
        state.device.token = token
    },

    storeDevicePlatform (platform) {
        state.device.platform = platform
    }

}

export default {
    state,
    methods,
    apiCallMethods,
    authMethods,
    notificationMethods
}