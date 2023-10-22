import React from 'react';
import { Box, Text, Icon, Flex, Button, Center } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartWidget from './CartWidget';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); // Aquí está el cambio
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      padding="1rem"
      backgroundColor="teal.500"
      color="white"
    >
      <Text fontSize="2xl" fontWeight="bold">
        Samsung Ecommerce
      </Text>

      <Box marginRight="10%">
        <Center maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Button colorScheme="teal" variant="solid" onClick={() => navigate(`/`)}>
            Inicio
          </Button>
        </Center>
      </ Box>

      <Flex alignItems="center">
        <CartWidget />
        <Box
          as={AiOutlineShoppingCart}
          fontSize="2xl"
          ml="2"
          cursor="pointer"
          _hover={{
            color: 'teal.300',
          }}
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;

