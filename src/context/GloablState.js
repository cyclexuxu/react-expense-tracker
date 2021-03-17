import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
const initialState = {
    transactions:[
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 3000 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 },
        { id: 5, text: 'Phote', amount: -20 }
    ]
}
// create context
export const GlobalContext = createContext(initialState);

// gloabl provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions 
    function deleteExpense (id) {
        dispatch({
            type: "DELETE_ITEM",
            payload: id
        });
    }
    function addExpense(transaction) {
        dispatch({
            type: "ADD_ITEM",
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteExpense,
        addExpense
    }}>
        {children}
    </GlobalContext.Provider>)
}