import React from 'react';
import { Box, Text, Button, VStack, Center } from '@chakra-ui/react';
import { Card } from "@chakra-ui/react"

const ItemListContainer = ({ greeting }) => {
  return (
    <Box>
      <Text fontSize="2xl" mb="4">{greeting}</Text>
      <Center>
        <Card maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box p="6">
            <VStack>
              <Button colorScheme="teal" variant="solid">
                Buy Now
              </Button>
            </VStack>
          </Box>
        </Card>
      </Center>
    </Box>
  );
}

export default ItemListContainer;
