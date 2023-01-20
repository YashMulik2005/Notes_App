import { createContext, useContext, useReducer, useState } from "react";
import testReducar, { intialState } from "./testReducar"


const TestContext = createContext(intialState);

export const TestProvider = ({ children }) => {
    const [state, dispach] = useReducer(testReducar, intialState);
    const [currentote, setCurrentote] = useState(null)

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
    const updateData = (item) => {
        const updateddata = state.data;
        console.log(updateddata);
        updateddata[item.id].title = item.title;
        updateddata[item.id].text = item.text;

        localStorage.setItem('data', JSON.stringify(updateddata))
        dispach({
            type: "UPDATE_DATA",
            payload: updateddata
        })
    }
    const value = {
        data: state.data,
        addData,
        removeData,
        updateData,
        currentote,
        setCurrentote,
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