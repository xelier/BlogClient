import Axios from "axios";
export const HeaderAction = {
    getMenuItem(){
        return Axios.get(`/cfg/menu`)
    },

};
