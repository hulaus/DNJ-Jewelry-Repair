import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Jewelry from './components/jewelry';
import Forum from './components/forum';
import Aboutus from './components/aboutUs';
import Custom from './components/custom';
import Navbar from './components/navbar';
import Cart from './components/shopify/cart'
import { useState } from 'react';
import { connect } from 'react-redux';
import store from './components/store';


function App() {
  
  const [cartItems, setCartItems] = useState([]);

  const updateQuantityInCart = (lineItemId, quantity) => {
  // update the quantity of a line item in the carItems array 
    const state = store.getState(); // State from redux store
    

    setCartItems(updatedCartItems);
  }

  const removeLineItemInCart = (lineItemId) => {
    //remove a line item from the cartItems arry
    setCartItems(updatedCartItems);
  }

  const handleCartClose = () => {
    // close the cart by setting isCartOpen to false

  }


  return (
    <div className="App">
   <Navbar />
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="jewelry" element={<Jewelry />} />
      <Route path="forum" element={<Forum />} />
      <Route path="Aboutus" element={<Aboutus />} />
      <Route path="Custom" element={<Custom />} />
    </Routes>
   </BrowserRouter>
   <Cart 
      checkout={this.state.checkout}
      isCartOpen={this.state.isCartOpen}
      handleCartClose={this.handleCartClose}
      updateQuantityInCart={this.updateQuantityInCart}
      removeLineItemInCart={this.removeLineItemInCart}
   />
    </div>

  );
}

//connects Redux state to the App Component
export default connect((state) => state)(App);
