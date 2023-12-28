import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const AppContext = createContext(null)
export const useAppContext = () => {
    const context = useContext(AppContext)

    if(context === undefined){ 
        throw new Error("Appcontext must be within appContextProvider")
    }

    return context
}

const AppContextProvider = ({children}) => {
    const [favorites,setFavorites] = useState([])

    const addToFavorites = (news) => {
        const oldFavorites = [...favorites]
        const newFavorites = oldFavorites.concat(news)
        setFavorites(newFavorites)
    }

    const removeFromFavorites = (url) => {
        const oldFavorites = [...favorites]
        const newFavorites = oldFavorites.filter((news) => news.url !== url)
        setFavorites(newFavorites)
    }

    return(
        <AppContext.Provider value={{favorites,addToFavorites,removeFromFavorites}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider