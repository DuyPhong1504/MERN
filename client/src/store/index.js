import {  configureStore } from '@reduxjs/toolkit'
import todosReducers from './reducerss/ItemsSlice'




//store

const store = configureStore({
    reducer:{
        todosReducers
    }

})



export default store