const initialState = {
    news: [{
        id: 1,
        title: '',
        category: ''
    }]
}

export const NewsReducer = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_NEWS:
            return state
        default:
            return state
    }
}