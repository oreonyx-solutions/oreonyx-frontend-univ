import { reactive } from 'vue'
import apiCallMethods from './api-call-methods'
import authMethods from './auth-methods'
import notificationMethods from './notification-methods' 
import groupMethods from './group-methods'
import sessionMethods from './session-methods'
import webrtcMethods from './webrtc-methods'

const state = reactive ({
    user: {},
    establishment: {},
    events: [],
    connection:null,
    workspace: {
        display: true,
        // user: {
        //     id: this.user.id,
        //     name: this.user.lastName+ ' ' + this.user.firstName,
        //     avatar: this.user.avatar,
        //     role: this.user.role
        // },
        group: {
            id: "cl79war0u00014spgylvm91zg",
            name: "UE6 2017 - 2018 Semestre Harmatan workspace 1"
        },
        teachingUnitCode: 'UE6',
        date: new Date('Wed Aug 31 2022 11:00:00 GMT+0000 (Coordinated Universal Time)'),
        session: null
    },
    isAuth: false,
    toggleWorkSpace:false,
    device: {
        id: null,
        token: null,
        platform: null
    },
    uploadUrl: 'https://nx-server.work/oreonyx/univ/0/',
    apiUrl: 'https://nx-server.work/oreonyx/univ/0/api/',
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
    notificationMethods,
    groupMethods,
    sessionMethods,
    webrtcMethods
}