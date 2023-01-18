export const intialState ={
    data:[]
}

const testReducar =(state,action)=>{
    const {type,payload} = action;

    switch (type) {
        case "ADD_DATA":
            console.log("ADD_DATA",payload);
            return{
                ...state,
                data: payload
            }
            break;

        case "REMOVE_DATA":
            console.log("REMOVE_DATA",payload);
            return{
                ...state,
                data : payload
            }
            break;
        case "UPDATE_DATA":
            console.log("UPDATE_DATA",payload);
            return{
                ...state,
                data : payload
            }
            break;
        case "LOAD_FIRST":
            console.log("load first",payload);
            return{
                ...state,
                data:payload
            }
            break;
        default:
            throw new Error("No case found for type ",type);
            break;
    }
}
export default testReducar;
