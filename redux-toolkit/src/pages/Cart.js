import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const handleRemove=(id)=>{
    dispatch(remove(id))
  }
  return (
    <div>
      <h3>CART</h3>
      <div className='cartWrapper'>
        {
          cartItems.map(cartItem=>(
            <div className='cartCard' key={cartItem.id}>
              <img src={cartItem.image} alt=''/>
              <h5>{cartItem.title}</h5>
              <h6>{cartItem.price}</h6>
              <button className='btn' onClick={()=>handleRemove(cartItem.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart