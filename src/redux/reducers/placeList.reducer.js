//list of places belonging to user from database
const placeList = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLACE_LIST':
            return action.payload;
        default:
            return state;
    }
};

export default placeList;