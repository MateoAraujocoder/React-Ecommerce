import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Box, Text, Icon, Flex, Button, Center, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartWidget from './CartWidget';
import { useNavigate } from 'react-router-dom';

import Category from './Category';

const Navbar = () => {
  const navigate = useNavigate();

  const routes = useRoutes([
    { path: '/categoriaA', element: <Category category="A" /> },
    { path: '/categoriaB', element: <Category category="B" /> },
 
  ]);

  const handleCategoryClick = (category) => {
    navigate(`/categoria${category}`);
  };

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

      <Box marginRight="25%">
        <Center maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Button colorScheme="teal" variant="solid" onClick={() => navigate(`/`)}>
            Inicio
          </Button>
          <Menu>
            <MenuButton as={Button} colorScheme="teal" variant="solid" ml={2}>
              Categorías
            </MenuButton>
            <MenuList>
              <MenuItem _hover={{ bg: "black", color: "white" }} onClick={() => handleCategoryClick('A')}>Notebooks</MenuItem>
              <MenuItem _hover={{ bg: "black", color: "white" }} onClick={() => handleCategoryClick('B')}>Relojes</MenuItem>
 
            </MenuList>
          </Menu>
        </Center>
      </ Box>

      <Flex alignItems="center">
        <CartWidget />
      </Flex>
    </Flex>
  );
};

export default Navbar;
