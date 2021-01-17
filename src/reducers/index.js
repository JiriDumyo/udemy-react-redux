import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })
//　複数のReducersがある場合の書き方 export default combineReducers({ foo, bar, baz })
