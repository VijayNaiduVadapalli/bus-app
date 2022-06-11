const initialState = {
    buses: []
};

const handleBus = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case "FoundBus":

            return {
                buses: action.payload
            };

            break;

        default: return state;


    }
}


export default handleBus;


 