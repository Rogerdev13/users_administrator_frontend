import { createContext, useReducer } from "react";
import {Users} from  './Users'

const UserContext = createContext()

const UserProvider = ( {children}) =>{
    

    const reducer = (state , action) =>{
        switch (action.type){
            case "add":
                return [...state , action.payload]
            case "update":
                const edit  = action.payload
                return state.map(s => s.id === edit.id ? edit : s)
            case "remove":
                const exists = state.filter(s => s.id !== action.payload)
                return exists
            default:
                return state
        }
    }

    const [userReducer , dispatch] = useReducer(reducer , Users)

    
    return(
        <UserContext.Provider value={[userReducer , dispatch]}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider}
export default UserContext