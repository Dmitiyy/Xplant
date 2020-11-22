const initialState = {
    plants: []
};

export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN': 
            return {
                plants: {...state.plants, ...action.payLoad}
            }

        default:
            return {...state}
    }
}