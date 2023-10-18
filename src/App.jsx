import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar'; 
import ItemListContainer from './components/itemListContainer';
import ItemCount from './components/itemCount';

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a Samsung"} />
      <ItemCount></ItemCount>
    </ChakraProvider>
  );
}

export default App;