import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './componets/Navbar'; // Asegúrate de que la ruta sea correcta
import ItemListContainer from './componets/itemListContainer';

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a Samsung"} />
      {/* El resto de tu aplicación */}
    </ChakraProvider>
  );
}

export default App;

