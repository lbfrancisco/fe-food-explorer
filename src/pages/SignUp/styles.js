import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 128px;
  gap: 32px;

  img {
    width: clamp(15.25rem, 13.8214rem + 7.1429vw, 20.25rem);;
  }

  button {
    max-width: 100%;
  }

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
    font-size: 14px;
    line-height: 24%;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.COLORS.CAKE[200]};
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    padding: 24px;
  }
`;
