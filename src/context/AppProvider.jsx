import { createContext,useState } from "react";

const AppContext = createContext()

const AppProvider = ({children})=>{
    const [history,setHistory] = useState([])
    const [time,setTime] = useState({ hour: "", minute: "", status: "" });
    const [loading,setLoading] = useState(false)

    const value ={
        history,
        time,
        loading,
        setHistory,
        setTime,
        setLoading
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}


export {AppProvider,AppContext}