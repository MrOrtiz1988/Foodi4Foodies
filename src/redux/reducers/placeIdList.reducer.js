//list of just the ids of the stored places from database
const placeIdList = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLACE_ID_LIST':
            return action.payload;
        default:
            return state;
    }
};

export default placeIdList;