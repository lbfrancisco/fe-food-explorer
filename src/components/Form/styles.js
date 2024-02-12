import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 16px;
  max-width: 476px;
  padding: 48px;

  background: ${({ theme }) => theme.COLORS.DARK[700]};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  @media screen and (max-width: 768px) {
    background: transparent;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  font-size: clamp(1rem, 0.7143rem + 1.4286vw, 2rem);
  font-weight: 500;
  line-height: 140%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
