import { ActionTypes } from "../Contants/ActionType"

export const setNews = (news) => {
    return {
        type: ActionTypes.SET_NEWS,
        payload: news
    }
}
export const selectedNews = (newS) => {
    return {
        type: ActionTypes.SELECTED_NEWS,
        payload: newS
    }
}