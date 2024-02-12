import React from 'react';
import { Search } from 'lucide-react';
import { Container } from './styles';
import Input from '../Input';

export default function SearchInput() {
  return (
    <Container className="input-wrapper">
      <Search color="#c4c4cc" size={24} />
      <Input type="search" placeholder="Busque por pratos ou ingredientes" />
    </Container>
  );
}
