import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  position: relative;

  .splide__arrow {
    &:disabled {
      display: none;
    }

    svg {
      fill: #fff;
    }
  }

  ul {
    display: flex;
    gap: 24px;
  }
`;

export const Card = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  width: clamp(13.125rem, 11.3393rem + 8.9286vw, 19.375rem);
  height: clamp(18.25rem, 15.2143rem + 15.1786vw, 28.875rem);

  color: ${({ theme }) => theme.COLORS.LIGHT[300]};
  background: ${({ theme }) => theme.COLORS.DARK[200]};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK[300]};
  border-radius: 8px;
  text-align: center;
  padding: 24px;

  > img {
    width: clamp(5.5rem, 3.9286rem + 7.8571vw, 11rem);
  }

  > button {
    border: none;
    outline: none;
    background: transparent;

    color: ${({ theme }) => theme.COLORS.LIGHT[300]};

    > h2 {
      font-family: 'Poppins', sans-serif;
      font-size: clamp(0.875rem, 0.6964rem + 0.8929vw, 1.5rem);
    }
  }

  > button:hover {
    color: ${({ theme }) => theme.COLORS.CAKE[200]};
  }

  > p {
    font-size: 14px;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.CAKE[200]};
    font-size: clamp(1rem, 0.7143rem + 1.4286vw, 2rem);
  }

  @media screen and (max-width: 900px) {
    gap: 12px;

    p {
      display: none;
    }
  }
`;

export const Action = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column;

    > button {
      width: 100%;
      max-width: 100%;
    }
  }
`;
