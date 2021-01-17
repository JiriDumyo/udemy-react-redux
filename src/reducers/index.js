import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })
//　複数のReducersがある場合の書き方 export default combineReducers({ foo, bar, baz })
