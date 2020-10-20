import LIST from "../data/heroes.json";
const amount = (state = LIST.length, action) => {
    switch (action.type) {
        case 'AMOUNT':
            state = action.amount;
            return state;
        default:
            return state;
    }
}

export default list;