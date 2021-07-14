import Axios from "axios";

export const indexAction = {
    getTravelingArticles(param) {
        return Axios.get(`http://localhost:8888/queryArticleList`, {params: {param: param}})
    }
};
