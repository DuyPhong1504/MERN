import { createSlice } from '@reduxjs/toolkit'
import { list } from './List'
const TodoListSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos: list
    }
}
)
//reducers
const todosReducers = TodoListSlice.reducer

//Selector 
export const todosSelector = state => state.todosReducers.allTodos


export default todosReducers