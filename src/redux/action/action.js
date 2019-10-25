/**
 * Action:类型
 */
import type from '../store/types';

export function handleMenuAction(params){
    return {
        type: type.CURRENT_MENU,
        params
    }
}

export function handleArticleAction(params){
    return {
        type: type.CURRENT_ARTICLE,
        params
    }
}

export function handleNextArticleAction(params){
    return {
        type: type.NEXT_ARTICLE,
        params
    }
}

export function handlePreviewArticleAction(params){
    return {
        type: type.PREVIEW_ARTICLE,
        params
    }
}
