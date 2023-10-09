import React, { useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Flex alignItems="center">
      <Button size="sm" onClick={handleDecrement} colorScheme="teal">
        -
      </Button>
      <Text mx={4}>{count}</Text>
      <Button size="sm" onClick={handleIncrement} colorScheme="teal">
        +
      </Button>
    </Flex>
  );
};

export default ItemCount;