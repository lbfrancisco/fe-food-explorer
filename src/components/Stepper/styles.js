import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  > span {
    font-size: clamp(1rem, 0.9286rem + 0.3571vw, 1.25rem);
    color: #fff;
  }

  > button {
    border: none;
    background: transparent;
  }
`;
