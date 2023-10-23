import React from 'react';
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import { Card } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';
import ItemCount from './itemCount';

const Category = ({ category }) => {
  const navigate = useNavigate();
  const products = [
    { id: 'product1', name: `Producto 1 de la categoría ${category}`, price: '$100', stock: '10 en stock' },
    { id: 'product2', name: `Producto 2 de la categoría ${category}`, price: '$200', stock: '20 en stock' },
  ];

  return (
    <Box>
      <Text fontSize="2xl" mb="4">{`Categoría ${category}`}</Text>
      <VStack>
        {products.map((product) => (
          <Card key={product.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
              <VStack>
                <Text fontSize="xl">{product.name}</Text>
                <Text>{product.price}</Text>
                <Text>{product.stock}</Text>

                <ItemCount />
                
                <Button colorScheme="teal" variant="solid">
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
};

export default Category;
