function createAPIActionType(actionName) {
  return {
    INTENT: actionName,
    REQUEST: `${actionName}_REQUEST`,
    SUCCESS: `${actionName}_SUCCESS`,
    FAILURE: `${actionName}_FAILURE`
  }
}

export const GET_MOVIE = createAPIActionType("GET_MOVIE")
export const GET_MOVIES = createAPIActionType("GET_MOVIES")
