import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import {CartContext} from './CartContext';
import {useState} from 'react';

export default function App() {

	const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>

		<CartContext.Provider value={{cartItems,setCartItems}}>

			<nav>
				<Link to="/">Home</Link> 
				<Link to="/checkout">Shopping Cart</Link>
			</nav>

			<Routes>
				<Route path="/" element={<ProductList/>} />
				<Route path="/checkout" element={<Checkout/>} />

				<Route path="/product" element={<ProductDetail/>}>
					<Route path=":id" element={<ProductDetail/>} />
				</Route>

				<Route path="*" element={<p>No such page</p>}/>
			</Routes>

		</CartContext.Provider>

	</BrowserRouter>
  );
};