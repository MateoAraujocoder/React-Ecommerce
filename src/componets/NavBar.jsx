import React from 'react';
import { Box, Text, Icon, Flex } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartWidget from './CartWidget';

const Navbar = () => {
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

