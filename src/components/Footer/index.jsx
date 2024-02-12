import React from 'react';
import { Container } from './styles';

import logo from '../../assets/logo-gray.svg';

export default function Footer() {
  return (
    <Container>
      <img src={logo} alt="logo food explorer" />
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  );
}
