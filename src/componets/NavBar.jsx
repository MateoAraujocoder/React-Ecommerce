import React from 'react';
import { Box, Text, Icon } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="1rem"
      backgroundColor="teal.500"
      color="white"
    >
      <Text fontSize="2xl" fontWeight="bold">
        Samsung Ecommerce
      </Text>
      <Box
        as={AiOutlineShoppingCart}
        fontSize="2xl"
        ml="2"
        cursor="pointer"
        _hover={{
          color: 'teal.300',
        }}
      />
      <CartWidget />
    </Box>
  );
};

export default Navbar;
