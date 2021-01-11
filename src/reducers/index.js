import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
//　複数のReducersがある場合の書き方 export default combineReducers({ foo, bar, baz })
