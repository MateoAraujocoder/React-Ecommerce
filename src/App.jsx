import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/itemCount';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import Category from './components/Category'; 
import { CartProvider } from './components/CartContext';

const App = () => {
  return (
    <ChakraProvider>
      <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Samsung"} />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} /> 
          <Route path="/categoriaA" element={<Category category="A" />} /> 
          <Route path="/categoriaB" element={<Category category="B" />} /> 
        </Routes>
        <ItemCount></ItemCount>
      </Router>
      </ CartProvider>
    </ChakraProvider>
  );
}

export default App;
