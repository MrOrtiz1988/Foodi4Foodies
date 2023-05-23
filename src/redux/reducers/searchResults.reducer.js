const results = (state = {}, action) => {
    switch (action.type) {
      case 'SET_RESULTS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default results;
  