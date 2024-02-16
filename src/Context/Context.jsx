import React, { useContext, useEffect, useState } from "react"

export const API_URl = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`

// context(warehouse)
const AppContext = React.createContext()

// Provider
const AppProvider = ({children}) =>{

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const [error, setError] = useState({show:'false', msg: ''})
    const [querry, setQuerry] = useState('Avengers')

    const getMovies = async(url) =>{
        setIsLoading(true)
        try {
            const res = await fetch (url)
            const data = await res.json();
            console.log(data)
            if (data.Response === 'True'){
                setIsLoading(false)
                setMovie(data.Search)
                setError({
                    show: false,
                    msg:null
                })
            }else{
                setError({
                    show: true,
                    msg:data.Error
                })
            }
        } catch (error) {
            alert('error')
        }
    }

    useEffect(()=>{
        let timeout = setTimeout(()=>{getMovies(`${API_URl}&s=${querry}`)},600)

        return ()=> clearTimeout(timeout)
    }, [querry])

    return <AppContext.Provider value={{isLoading, error, movie, querry, setQuerry}}>
        {children}
    </AppContext.Provider>
}

// global hook
const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}