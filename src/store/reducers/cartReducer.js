let initialState = [];

const cartReducer = (state = initialState,action) => {
    switch(action.type){
        case "SET_CART_DATA" :

            return action.payload
        case "ADD_ITEMS_TO_CART" :
            const mergedItem = {...action.payload,quantity : 1}
             console.log([...state,mergedItem]);
            return [...state,mergedItem];
        case "REMOVE_ITEMS_FROM_CART" :
            const filteredList = state.filter((elem) => {return elem.id != action.payload});
            console.log(filteredList);
            return filteredList;

        case "CLEAR_CART" :
            return initialState;
        default :
         return state
    }
}

export default cartReducer;