import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;

  > svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
  }

  input {
    padding-left: 3rem;
  }
`;
