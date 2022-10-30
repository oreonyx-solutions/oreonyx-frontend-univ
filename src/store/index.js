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
    payement_payload:{},
    offers_cart:{},
    connection:null,
    workspace: {
        display: false,
        // user: {
        //     id: this.user.id,
        //     name: this.user.lastName+ ' ' + this.user.firstName,
        //     avatar: this.user.avatar,
        //     role: this.user.role
        // },
        group: {
            id: "cl9cyculp00157elcxem36yk1",
            name: "UE2 2019-2020 Semestre Harmatan workspace 1"
        },
        teachingUnitCode: 'UE2',
        date: new Date('Wed Oct 19 2022 11:00:00 GMT+0000 (Coordinated Universal Time)'),
        session: null
    },
    isAuth: false,
    toggleWorkSpace:false,
    device: {
        id: null,
        token: null,
        platform: null
    },
    
    uploadUrl: 'https://nx-server.work/univ-0/',
    apiUrl: 'https://nx-server.work/univ-0/api/',
    
    //uploadUrl: 'http://localhost/univ-0/',
    //apiUrl: 'http://localhost/univ-0/api/',

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