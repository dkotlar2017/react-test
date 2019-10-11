import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import { CartContext } from './CartContext';

import './Main.css';

function Main(props) {
  const [products] = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);

  const addToCart = (e) => {
  	props.setTotal(props.total + 1);
  	cart.push(e.target.value);
  	setCart(cart);
  }


  return (<div className="Main-products-wrapper">
  		{	products.map((product, index) => {
        		return <div key={index} className="Main-products">
        		<span><img src={product.image} alt={product.name} /></span>
        		<span>
        			{product.name}
	        		<br />
	        		${product.price}
	        		<br />
	        		<button onClick={addToCart} value={product.id}>Add</button>
        		</span>
        	</div>
      		})
      	}
  	</div>);
}
export default Main;