import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import {STATUS} from '../store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const {data: products, status} = useSelector((state)=>state.product)
    // const [products, setProducts] = useState([]);
    useEffect(() => {
      dispatch(fetchProducts());
      // const fetchProducts = async ()=>{
      //   const res = await fetch('https://fakestoreapi.com/products')
      //   const data = await res.json();
      //   setProducts(data)
      // }
      // fetchProducts();
    }, [])
    const handleAdd = (product) =>{
      return()=>{
        dispatch(add(product));
      }
    }
    
    if(status === STATUS.LOADING){
      return <h3>LOADING.....</h3>
    }

    if(status === STATUS.ERROR){
      return <h3>Something went wrong</h3>
    }

  return (
    <div className='productsWrapper'>
        {
            products.map(product=>(
                 <div className='card' key={product.id}>
                    <img src={product.image} alt=""/>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={handleAdd(product)} className='btn'>Add to Cart</button>
                 </div>
            ))
        }
    </div>
  )
}

export default Products