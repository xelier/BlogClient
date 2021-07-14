import Axios from "axios";
import http from "../tools";

export const indexAction = {
    getMenuItem() {
        return Axios.get(`/cfg/menu`)
    },

    logout() {
        return new Promise((resolve, reject) => {
            http("get", '/api/logout').then(res => {
                resolve(res);
            }, error => {
                reject(error)
            })
        })
    }


};
