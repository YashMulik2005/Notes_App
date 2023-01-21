export const intialState ={
    data:(localStorage.getItem('data')=== null)? [] :JSON.parse(localStorage.getItem('data'))
}

const testReducar =(state,action)=>{
    const {type,payload} = action;

    switch (type) {
        case "ADD_DATA":
            return{
                ...state,
                data: payload
            }
            break;

        case "REMOVE_DATA":
            return{
                ...state,
                data : payload
            }
            break;
        case "UPDATE_DATA":
            return{
                ...state,
                data: payload
            }
            break;
        
        default:
            throw new Error("No case found for type ",type);
            break;
    }
}
export default testReducar;
