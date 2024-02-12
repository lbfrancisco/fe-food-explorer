import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.COLORS.DARK[400]};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 56px 24px 24px;

  background: ${({ theme }) => theme.COLORS.DARK[700]};

  button {
    display: flex;
    background: transparent;
    border: none;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
    font-size: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  padding: 24px;

  nav {
    margin-top: 46px;
    font-size: 24px;
  }

  ul {
    list-style: none;

    > li {
      padding: 10px 0;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK[1000]};

      a {
        color: ${({ theme }) => theme.COLORS.LIGHT[100]};
        text-decoration: none;
      }
    }
  }
`;
