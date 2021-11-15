import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    watchList: []
}

export const GlobalContext = createContext(initialState)

export const GlobaProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addToWatchList = (movie) => {
        dispatch({ type: 'ADD_Movie_TO_WATCHLIST', payload: movie })
    }

    return (
        <>
            <GlobalContext.Provider value={{ watchList: state.watchList, addToWatchList }}>
                {props.children}
            </GlobalContext.Provider>
        </>
    )
}
