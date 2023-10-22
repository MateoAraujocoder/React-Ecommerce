import React from 'react';
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import { Card } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const navigate = useNavigate();
  const products = Array(10).fill().map((_, i) => ({
    id: `producto${i+1}`,
    name: `Producto ${i+1}`,
    price: `$${(i+1)*10}`,
    stock: `${100-(i*10)} en stock`
  }));

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