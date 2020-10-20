const video = (state = true, action) => {
    console.log(action.type);
    switch(action.type){
        case "CHANGEBOOL":
            return !state;
        default: 
            return state;
    }
}

export default video;