import { combineReducers } from '@reduxjs/toolkit'
import exampleReducer from './Entities/example/example'



export default combineReducers({
	example: exampleReducer,

})