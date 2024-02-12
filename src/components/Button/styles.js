import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  max-width: fit-content;
  height: 48px;
  border: none;
  background: ${({ theme }) => theme.COLORS.TOMATO[100]};
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  font-weight: 500;
  font-size: 14px;
  line-height: 24%;
  border-radius: 5px;
  padding: 12px 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  transition: background .2s;

  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO[200]};
  }
`;
