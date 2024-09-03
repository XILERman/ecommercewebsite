import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout_left'>

        <img className='checkout_ad' src="https://m.media-amazon.com/images/G/31/img15/zak/24/gampage/Intel_Gaming1_1500x300._CB582741402_.jpg" alt="" />
        <div>
        <h2 className="checkout_title">your shopping basket</h2>
        {/* Basket items */}
        {/* Basket items */}
        {/* Basket items */}
        {/* Basket items */}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal/>
        
      </div>
    </div>
  )
}

export default Checkout
