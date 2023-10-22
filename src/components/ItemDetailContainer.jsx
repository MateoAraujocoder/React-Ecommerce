import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

const ItemDetailContainer = () => {
    const location = useLocation();
    const product = location.state;

    return (
        <div>
            <h1>Detalles del producto</h1>

            <p>Nombre del producto: {product.name}</p>
            <p>Precio del producto: {product.price}</p>
            <p>Stock del producto: {product.stock}</p>

            <Flex

            ><Button alignItems="center" colorScheme="teal" variant="solid">
                    Buy Now
                </Button>

            </ Flex>

        </div>
    );
}

export default ItemDetailContainer;