import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  width: 100%;
  padding: clamp(1.5rem, 1.5rem + 0vw, 1.5rem) clamp(8rem, 8rem + 0vw, 8rem);
  background: ${({ theme }) => theme.COLORS.DARK[600]};

  img {
    width: clamp(8.875rem, 8.1071rem + 3.8393vw, 11.5625rem);

  }

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
    font-size: clamp(0.75rem, 0.7143rem + 0.1786vw, 0.875rem);
  }

  @media screen and (max-width: 900px) {
    padding: clamp(1.5rem, 1.5rem + 0vw, 1.5rem) clamp(1.5rem, 1.5rem + 0vw, 1.5rem);
  }
`;
