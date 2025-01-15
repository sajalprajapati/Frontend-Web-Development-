import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const removeFromCart=() =>
  {
    dispatch(remove(item.id));
    toast.success(`${item.title} has been removed from  your cart!`);

  }



  return (
    <div>
       
       <div>
          
           <div>
              <img src={item.image}/>
           </div>


          <div>
            <h1>{item.title}</h1>

            <h1>
              {item.description}
            </h1>


            <div>
              <p>{item.price}</p>
              <div onClick={removeFromCart}>
                <FcDeleteDatabase/>
              </div>
            </div>




          </div>





       </div>
    </div>
  )
}

export default CartItem