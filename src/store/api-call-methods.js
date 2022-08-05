import axios from "axios"
import store from "."

export default {

    post (path, data ) {
        console.log("DATA:" + data)
        return axios.post( store.state.apiUrl + path, data, store.state.config ).then(
            res => {
                console.log(res.data);
                return res.data;
            }, 
            res => {
                console.log(res.response.status);
                window.alert(res.response.data.error)
            }
        );
    },

    get (path) {
        return axios.get( store.state.apiUrl + path, store.state.config ).then(
            res => {
                //console.log('check', res.data);
                return res.data;
            }, 
            res => {
                console.log(res.response.status);
                window.alert(res.response.data.error)
            }
        );
    },

    put(path, data) {
        return axios.put( store.state.apiUrl + path, data, store.state.config ).then(
            res => {
                //console.log(res.data);
                return res.data;
            }, 
            res => {
                console.log(res.response.status);
                window.alert(res.response.data.error)
            }
        );
    },

    patch(path, data) {
        return axios.patch( store.state.apiUrl + path, data, store.state.config ).then(
            res => {
                //console.log(res.data);
                return res.data;
            }, 
            res => {
                console.log(res.response.status);
                window.alert(res.response.data.error)
            }
        );
    },

    delete(path, data) {
        const req = { ...store.state.config, data }
        return axios.delete( store.state.apiUrl + path, req ).then(
            res => {
                //console.log(res.data);
                return res.data;
            }, 
            res => {
                console.log(res.response.status);
                window.alert(res.response.data.error)
            }
        );
    }
    
}
