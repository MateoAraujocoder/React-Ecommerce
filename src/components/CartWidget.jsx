import React from 'react';
import { CartContext } from './CartContext';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartWidget = () => {
  const { cart } = React.useContext(CartContext);

  return (
    <Menu>
      <MenuButton
        as={AiOutlineShoppingCart}
        fontSize="2xl"
        ml="2"
        cursor="pointer"
        _hover={{
          color: 'teal.300',
        }}
      />
      <MenuList>
        {cart.map((product) => (
          <MenuItem key={product.id}>
            {product.nombre}: {product.precio}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CartWidget;

