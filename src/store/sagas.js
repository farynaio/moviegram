import { call, put, select, takeLatest } from "redux-saga/effects"

import { GET_MOVIES, GET_MOVIE } from "../actions/actionTypes"
import * as API from "../api"
import { movieSelector } from "../selectors"

function* callAPI({
  api,
  actionType,
  params = {},
  data = {},
  pathParams = []
}) {
  try {
    const response = yield call(api, params, data, pathParams)
    yield put({ type: actionType.SUCCESS, payload: response.data })
    return response
  } catch (error) {
    yield put({
      type: actionType.FAILURE,
      payload: { error: error.response.data.reason }
    })
  }
}

function* getMovies({ payload }) {
  yield call(callAPI, {
    api: API.getMovies,
    actionType: GET_MOVIES,
    ...payload
  })
}

function* getMovie({ payload }) {
  const movie = yield select(movieSelector, payload.id)

  if (movie) {
    // will be taken from redux
  } else {
    yield call(callAPI, {
      api: API.getMovie,
      actionType: GET_MOVIE,
      pathParams: [payload.id]
    })
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_MOVIES.INTENT, getMovies)
  yield takeLatest(GET_MOVIE.INTENT, getMovie)
}
