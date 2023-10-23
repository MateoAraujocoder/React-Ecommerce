import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/itemListContainer';
import ItemCount from './components/itemCount';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import Category from './components/Category'; 

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Samsung"} />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} /> 
          <Route path="/categoriaA" element={<Category category="A" />} /> 
          <Route path="/categoriaB" element={<Category category="B" />} /> 
        </Routes>
        <ItemCount></ItemCount>
      </Router>
    </ChakraProvider>
  );
}

export default App;
