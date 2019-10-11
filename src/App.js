import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import { ProductProvider } from './ProductContext';
import { CartProvider } from './CartContext';
import './App.css';


function App(){
    let [total, setTotal] = useState(0);

    return (
        <ProductProvider>
        	<CartProvider>
	            <div className="App">
	              <Header total={total} />
	              <Main total={total} setTotal={setTotal} />
	            </div>
	        </CartProvider>
        </ProductProvider>
    );
}

export default App;
