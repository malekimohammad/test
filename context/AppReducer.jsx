export default (state, action) => {
    switch (action.type) {
        case 'ADD_Movie_TO_WATCHLIST':
            return{
                ...state,
                watchList:[...state.watchList,action.payload]
            }
    
        default:
            break;
    }
}