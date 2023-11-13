import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Text, Button, Flex } from '@chakra-ui/react';
import { CartContext } from './CartContext';

const ItemDetailContainer = () => {
    const location = useLocation();
    const product = location.state;
    const {addToCart} = React.useContext(CartContext);

    return (
        <div>
            <h1>Detalles del producto</h1>

            <p>Nombre del producto: {product.nombre}</p>
            <p>Precio del producto: {product.precio}</p>
            <p>Stock: {product.stock}</p>
            <p>caracterizticas: {product.description}</p>

            <Flex

            ><Button alignItems="center" colorScheme="teal" variant="solid" onClick ={()=> addToCart (product)}>
                    Buy Now
                </Button>

            </ Flex>

        </div>
    );
}

export default ItemDetailContainer;