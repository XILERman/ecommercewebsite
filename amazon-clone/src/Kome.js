import React from 'react';
import "./Kome.css";
import Product from './Product';

function Kome() {
  return (
    <div className='home'>
        <div className="home_container">
            <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/GW/Koth/April/coupon/SPC-VPC-PC-1x._CB558913575_.jpg" alt="" />
            <div className="home_row">
                <Product title='The Lean Startup : The Million Copy Bestseller Driving Entrepreneurs to Success Paperback – 1 January 2011' price={29.9} 

                image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5}/>


                <Product title='The Lean startup' price={29.9} 

image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg"
rating={2}/>
            </div>

            <div className="home_row">

            <Product title='The Lean startup' price={29.9} 

image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg"
rating={2}/>

            <Product/>
            <Product/>
            </div>

            <div className="home_row">
                <Product/>
            </div>

        </div>
      

    </div>
  )
}

export default Kome
