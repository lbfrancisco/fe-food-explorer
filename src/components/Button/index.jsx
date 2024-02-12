import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Button({ children, onClick, className }) {
  return (
    <Container className={className} onClick={onClick}>
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};
