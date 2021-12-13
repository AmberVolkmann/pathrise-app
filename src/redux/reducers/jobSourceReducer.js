const jobSourceReducer = (state = [], action ) => {
    if ( action.type === 'SET_JOB_SOURCE') {
        return action.payload.jobSource
    }
    return state
}
  
  // user will be on the redux state at:
  // state.user
export default jobSourceReducer;