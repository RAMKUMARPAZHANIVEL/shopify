import React from 'react'
import { Button } from 'antd'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../store/actions/cart.action';
const Cart = () => {
    const cartList = useSelector(store => store.cart);
    const dispatch = useDispatch();
    const removeItem = (id) => {
        dispatch(removeItemFromCart(id));
    }
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
         { cartList.length > 0 ?(cartList.map((data) => {
        return(
          <div className='cart-card' key={data.id}>
            
              <div className="cart-card-left-section">
                <h3>{data.title}</h3>
                <p>Price - {data.price}</p>
                <Button type="primary" danger onClick={() => {removeItem(data.id)}} className="remove-btn">
                   Remove Item 
                </Button>
              </div>
              
              <img  src={data.image}/>
           
          </div>
        )
      })) :( <div style={{backgroundColor:"red"}}>
               <h2 className="alert-h2">Nothing in your cart</h2>
             </div>)}
    </div>
  )
}

export default Cart