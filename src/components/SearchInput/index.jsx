import React from 'react';
import { Search } from 'lucide-react';
import { Container } from './styles';
import Input from '../Input';

import useSearch from '../../hooks/useSearch';

export default function SearchInput() {
  const { search, setSearch } = useSearch();

  return (
    <Container className="input-wrapper">
      <Search color="#c4c4cc" size={24} />
      <Input
        type="search"
        placeholder="Busque por pratos ou ingredientes"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </Container>
  );
}
