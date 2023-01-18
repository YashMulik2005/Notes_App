import { createContext, useContext, useReducer } from "react";
import testReducar, { intialState } from "./testReducar"


const TestContext = createContext(intialState);

export const TestProvider = ({ children }) => {
    const [state, dispach] = useReducer(testReducar, intialState);

    const addData = (item) => {
        const updatedData = [item].concat(state.data);
        localStorage.setItem('data', JSON.stringify(updatedData))
        dispach({
            type: "ADD_DATA",
            payload: updatedData
        })
    }
    const removeData = (item) => {
        const updatedData = state.data.filter(currentItem => {
            return currentItem.id !== item?.id;
        })
        localStorage.setItem('data', JSON.stringify(updatedData))
        dispach({
            type: "REMOVE_DATA",
            payload: updatedData
        })
    }
    const value = {
        data: state.data,
        addData,
        removeData,
    }
    return <TestContext.Provider value={value}>{children}</TestContext.Provider>
}

const useData = () => {
    const context = useContext(TestContext)

    if (context === undefined) {
        throw new Error("useTest must be used within TestContext")
    }
    return context
}

export default useData;