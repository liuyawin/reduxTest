import { combineReducers } from "redux"
import { reducer as reduxFormReducer } from 'redux-form'

import todos from './todos'
import results from './results'

const reducers = combineReducers({
    todos,
    results,
    form: reduxFormReducer
})

export default reducers;