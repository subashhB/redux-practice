import { createSlice } from "@reduxjs/toolkit";
const STATUS = Object.freeze({
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
            state.status = STATUS.IDLE
        }
    }
})

export const {setProducts, setStatus} = productSlice.actionstion
export default productSlice.reducer

export function fetchProducts(){
    return async function fetchProductsThunk(dispatch, getState){
        dispatch(setStatus(STATUS.LOADING))
        try{
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
