import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';

const ItemListContainer = ({ greeting }) => {
  return (
    <Center h="100vh"> {/* Centra verticalmente en la página */}
      <Box>
        <Text fontSize="2xl">{greeting}</Text>
      </Box>
    </Center>
  );
}

export default ItemListContainer;
