import http from '../../tools';
export const indexAction = {
        getArticleList(param){
            return new Promise((resolve, reject) => {
                http("get",'/open/api/article', param).then(res => {
                    resolve (res);
                },error => {
                    reject(error)
                })
            })
        }

};
