import styled from 'styled-components';

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Container = styled.input`
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.COLORS.DARK[900]};
  border: none;
  padding: 16px;
  outline: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT[400]};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.COLORS.LIGHT[400]};
  font-size: 1rem;
  line-height: 100%;
`;
