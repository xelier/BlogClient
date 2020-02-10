import Axios from "axios";
export const indexAction = {
    getMenuItem(){
        return Axios.get(`/cfg/menu`)
    },

};
