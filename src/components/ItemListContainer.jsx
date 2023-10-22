import React from 'react';
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import { Card } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const navigate = useNavigate();
  const products = [
    {
      id: 'samsung1', name: 'Celular Samsung Galaxy A24', price: '$230.999', stock: '50 en stock'},
    { id: 'samsung2', name: 'Celular Samsung Galaxi S22', price: '459.999', stock: '40 en stock',description:' 5G 128 GB phantom black 8 GB RAM'},
    { id: 'samsung3', name: 'Samsung Galaxy A34 ', price: '$226.999', stock: '30 en stock',description:'128gb 6gb Ram Awesome Silver '},
    { id: 'samsung4', name: 'Samsung Galaxy A14 ', price: '$122.999', stock: '20 en stock',description:'128gb 4gb Ram Negro' },
    { id: 'samsung5', name: 'Samsung Galaxy A54 ', price: '$306.999', stock: '10 en stock',description:'5G 256 GB awesome white 8 GB RAM ' },
    { id: 'samsung6', name: 'Samsung Galaxy A04e', price: '$66.999', stock: '60 en stock',description:'32 GB cobre 3 GB RAM' },
    { id: 'samsung7', name: 'Samsung Galaxy S20 FE ', price: '$419.999 ', stock: '70 en stock',description:'5G 128 GB cloud navy 6 GB RAM' },
    { id: 'samsung8', name: 'Samsung Producto 8', price: '$89999', stock: '80 en stock' },
    { id: 'samsung9', name: 'Samsung Producto 9', price: '$99999', stock: '90 en stock' },
    { id: 'samsung10', name: 'Samsung Producto 10', price: '$109999', stock: '100 en stock' }
  ];

  return (
    <Box>
      <Text fontSize="2xl" mb="4">{greeting}</Text>
      <VStack>
        {products.map((product) => (
          <Card key={product.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
              <VStack>
                <Text fontSize="xl">{product.name}</Text>
                <Text>{product.price}</Text>
                <Text>{product.stock}</Text>
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
}

export default ItemListContainer;
