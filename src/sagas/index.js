import { all } from 'redux-saga/effects'

import counter from '../components/counter/saga'
import preload from '../components/splash-screen/saga'

export default function* rootSaga() {
  try {
    yield all([counter(), preload()])
  } catch (error) {
    console.error(error)
  }
}
