import LIST from "../data/heroes.json";
const list = (state = [], action) => {
    switch (action.type) {
        case 'LIST':
            state = LIST;
            return state;
        case 'DELETEITEM':
            state = state.splice(action.index,1);
            
            return state;
        default:
            return state;
    }
}

export default list;