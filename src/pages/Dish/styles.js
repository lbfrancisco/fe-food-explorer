import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  padding: 24px 128px 128px;

  > a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    gap: 8px;
    max-width: max-content;

    border: none;
    background: transparent;

    &:hover {
      > svg {
        stroke: ${({ theme }) => theme.COLORS.CAKE[200]};
      }

      > span {
        color: ${({ theme }) => theme.COLORS.CAKE[200]};
      }
    }

    > span {
      color: ${({ theme }) => theme.COLORS.LIGHT[100]};
      font-family: 'Poppins', sans-serif;
      line-height: 160%;
      font-size: 24px;
    }
  }

  @media screen and (max-width: 900px) {
    padding: 56px 24px 48px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  margin-top: 40px;

  > img {
    width: clamp(16.5rem, 14.25rem + 11.25vw, 24.375rem);
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const DishDescription = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  font-family: 'Poppins', sans-serif;

  > h1 {
    line-height: 140%;
    font-weight: 500;
    font-size: clamp(1.75rem, 1.5357rem + 1.0714vw, 2.5rem);
  }

  > p {
    margin-top: 24px;
    line-height: 160%;
    font-size: clamp(1rem, 0.9286rem + 0.3571vw, 1.25rem);
  }
`;

export const Tags = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 24px;
  list-style: none;
  flex-wrap: wrap;
  gap: 8px;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

export const Tag = styled.li`
  background: ${({ theme }) => theme.COLORS.DARK[1000]};
  border-radius: 4px;
  font-size: 14px;
  line-height: 24%;
  padding: 12px;
`;

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 48px;

  @media screen and (max-width: 900px) {
    justify-content: center;

    button {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 425px) {
    button {
      max-width: 100%;
    }
  }
`;
