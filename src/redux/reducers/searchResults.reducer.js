const results = (state = [], action) => {
    switch (action.type) {
      case 'SET_RESULTS':
        return action.payload;
      default:
        return state;
    }
  };
  
 //results reducer holds results for the search query
  export default results;
  