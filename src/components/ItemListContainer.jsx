import React, { useEffect, useState } from 'react';
import { Box, Text, Button, VStack , Center} from '@chakra-ui/react';
import { Card } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';
import ItemCount from './itemCount';
import { CartContext } from './CartContext';
import { db } from '../main';
import { collection, getDocs } from 'firebase/firestore';
import { Image } from '@chakra-ui/react';

const ItemListContainer = ({ greeting }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsCol = collection(db, 'products');
      const productsSnapshot = await getDocs(productsCol);
      const productsList = productsSnapshot.docs.map(doc => doc.data());
      setProducts(productsList);
    };

    getProducts();
  }, []);

  const {addToCart} = React.useContext(CartContext);
  
  return (
    <Box>
      <Center>
        <Text fontSize="2xl" mb="4">{greeting}</Text>
      </Center>
      <VStack>
        {products.map((product) => (
          <Card key={product.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
              <VStack>
              <Image src={product.imgURL} alt={product.nombre} />
                <Text fontSize="xl">{product.nombre}</Text>
                <Text>{product.description}</Text>
                <Text>{product.precio}</Text>
                <Text>{product.stock}</Text>

                <ItemCount /> 
                
                <Button colorScheme="teal" variant="solid" onClick={() => addToCart(product)}>
                  Buy Now
                </Button>
                <Button colorScheme="blue" variant="outline" onClick={() => navigate(`/product/${product.id}`, { state: product })}>
                  Ver detalles
                </Button>
              </VStack>
            </Box>
          </Card>
        ))}
      </VStack>
    </Box>
  );
}

export default ItemListContainer;
