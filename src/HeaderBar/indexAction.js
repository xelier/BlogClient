import Axios from "axios";
export const Index = {
    getMenuItem(){
        return Axios.get(`/cfg/menu`)
    },

};
