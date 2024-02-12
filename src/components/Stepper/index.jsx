import React, { useState } from 'react';

import { Minus, Plus } from 'lucide-react';
import { Container } from './styles';

export default function Stepper() {
  const [count, setCount] = useState(1);

  function handleCountIncrease() {
    return setCount((prevState) => prevState + 1);
  }

  function handleCountDecrease() {
    return setCount((prevState) => (prevState <= 1 ? 1 : prevState - 1));
  }

  return (
    <Container>
      <button type="button" onClick={handleCountDecrease}>
        <Minus color="#fff" size={24} />
      </button>
      <span>
        {count <= 9 ? '0' + count : count}
      </span>
      <button type="button" onClick={handleCountIncrease}>
        <Plus color="#fff" size={24} />
      </button>
    </Container>
  );
}
