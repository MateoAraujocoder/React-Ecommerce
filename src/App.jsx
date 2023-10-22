import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/itemCount';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'; // Asegúrate de crear este componente

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Samsung"} />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} /> 
        </Routes>
        <ItemCount></ItemCount>
      </Router>
    </ChakraProvider>
  );
}

export default App;