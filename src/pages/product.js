import React from 'react';
import { useEffect, useState } from 'react';
import Card from 'antd/es/card/Card';

import { Button, Rate } from 'antd';

import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import { addItemToCart } from '../store/actions/cart.action';

const { Meta } = Card;
const Product = () => {
    const[list,setList] = useState([])

    const navigate = useNavigate();
   const dispatch = useDispatch()
    useEffect( () => {
        (async _ => {
           try { const response = await fetch('https://fakestoreapi.com/products');
            if(response.message = 200){
            const data = await response.json();
            console.log(data);
            setList(data)
        }
      }catch(e) {
            console.log(e);
        }
        })()
      

       
    },[])

 const addToCart = (product) => {
  
//   navigate(`/detail/${product.id}`)
  console.log(product);
  dispatch(addItemToCart(product));
  
 }


  return (
    <div className='home-container'>
       {list.map((elem)=> {
        return(
         <div className='product-car' key={elem.id}> 
           <Card
          hoverable
          style={{ width: 280, minHeight : "15rem" } } className="product-card"
            > 
          <div className='display-center'>
          <img src={elem.image} />
          </div>
          <h3>{elem?.title}</h3>
          <p>{"price :" + " " + elem?.price}</p>
          {/* <Meta title={elem?.title} description= {"price :" + " " + elem?.price} /> */}
          <Rate disabled defaultValue={elem.rating.rate} />
          <Button type="primary" success onClick={() => addToCart(elem)} className="add-to-cart-btn" >Add to cart</Button>
        </Card>
         </div>
        )
       })} 
    </div>
  )
}

export default Product