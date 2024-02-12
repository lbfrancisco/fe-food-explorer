import React from 'react';
import PropTypes from 'prop-types';

import { Container, InputBox, Label } from './styles';

export default function Input({ type, label, placeholder, ...rest }) {
  return (
    <InputBox>
      {label && <Label>{label}</Label>}
      <Container type={type} placeholder={placeholder} {...rest} />
    </InputBox>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  type: 'text',
};
