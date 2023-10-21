import React from 'react';
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import { Card } from "@chakra-ui/react"

const ItemListContainer = ({ greeting }) => {
  // Supongamos que tienes un array de productos
  const products = Array(10).fill().map((_, i) => ({
    name: `Producto ${i+1}`,
    price: `$${(i+1)*10}`,
    stock: `${100-(i*10)} en stock`
  }));

  return (
    <Box>
      <Text fontSize="2xl" mb="4">{greeting}</Text>
      <VStack>
        {products.map((product, i) => (
          <Card key={i} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
              <VStack>
                <Text fontSize="xl">{product.name}</Text>
                <Text>{product.price}</Text>
                <Text>{product.stock}</Text>
                <Button colorScheme="teal" variant="solid">
                  Buy Now
                </Button>
                <Button colorScheme="blue" variant="outline">
                  Ver Detalles
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
