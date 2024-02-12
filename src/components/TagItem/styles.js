import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 32px;

  padding: 8px 16px;

  background: ${({ theme, isNew }) => (
    isNew ? 'transparent' : theme.COLORS.LIGHT[600]
  )};

  border: ${({ theme, isNew }) => (
    isNew ? `1px dashed ${theme.COLORS.LIGHT[500]}` : 'none'
  )};

  border-radius: 8px;

  > input, button {
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
    border: none;
    background: transparent;
    outline: none;
  }

  > input {
    width: fit-content;
  }
`;
