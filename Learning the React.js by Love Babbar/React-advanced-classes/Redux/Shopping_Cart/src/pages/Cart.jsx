import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state); // Accessing cart data
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (Array.isArray(cart)) {
      setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {/* Cart Items */}
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id || index} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary */}
          <div>
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p>Total Amount: ${totalAmount.toFixed(2)}</p>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        // Empty Cart Message
        <div>
          <h1>Cart is Empty</h1>
          <NavLink to="/">
            <button>Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
