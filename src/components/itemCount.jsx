import React, { useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Flex alignItems="center" justifyContent="center">
      <Button size="lg" onClick={Decrement} colorScheme="teal">
        -
      </Button>
      <Text mx={4} fontSize="2xl">
        {count}
      </Text>
      <Button size="lg" onClick={Increment} colorScheme="teal">
        +
      </Button>
    </Flex>
  );
};

export default ItemCount;
