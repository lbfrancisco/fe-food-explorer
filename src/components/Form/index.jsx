import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

export default function Form({ title, children }) {
  return (
    <Container>
      { title && <Title>{title}</Title> }
      { children }
    </Container>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
