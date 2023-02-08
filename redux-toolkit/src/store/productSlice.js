import { createSlice } from "@reduxjs/toolkit";
export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})
const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status: STATUS.IDLE,
    },
    reducers:{
        setProducts(state, action){
            state.data = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        }
    }
})

export const {setProducts, setStatus} = productSlice.actions
export default productSlice.reducer

//Thunk
export function fetchProducts(){
    return async function fetchProductsThunk(dispatch, getState){
        dispatch(setStatus(STATUS.LOADING))
        try{
            //You cannot call the asynchronous calls from the reducers so we have to use the thunk middleware
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUS.IDLE));
        }catch(err){
            dispatch(setStatus(STATUS.ERROR));
            console.log(err)
        }
    }
}
