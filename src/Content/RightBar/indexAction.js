import Axios from "axios";
export const indexAction = {
    getNewArticles(){
        return Axios.get(`http://localhost:8888/queryArticleList`,{
            params:{
                param: {
                    CONDITION: {},
                    PAGE_INDEX: 0,
                    PAGE_SIZE: 5
                }
            }
        })
    }
};
