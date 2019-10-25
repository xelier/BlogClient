/**
 * 数据处理
 */
import type from '../store/types';

export default (state , action) =>{
    switch(action.type){
        case type.CURRENT_MENU:
            return{
                ...state,
                CURRENT_MENU: action.params
            };
        case type.CURRENT_ARTICLE:
            return{
                ...state,
                CURRENT_ARTICLE: action.params
            };
        case type.NEXT_ARTICLE:
            return{
                ...state,
                NEXT_ARTICLE: action.params
            };
        case type.PREVIEW_ARTICLE:
            return{
                ...state,
                PREVIEW_ARTICLE: action.params
            };
        default:
            return { ...state };
    }
}
