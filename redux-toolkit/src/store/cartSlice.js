const {createSlice} = require('@reduxjs/toolkit');
const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add(state, action){
            state.push(action.payload)
        },
        remove(){
            state = state.filter(item=>item.id !== action.payload)
        }
    }
})

export const {add,  remove} = cartSlice
export default cartSlice.reducer