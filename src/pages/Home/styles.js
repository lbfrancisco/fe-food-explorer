import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding: 164px 128px 48px;

  @media screen and (max-width: 900px) {
    padding: 56px 24px 48px;
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-bottom: 48px;

  position: relative;
  background: ${({ theme }) => theme.COLORS.GRADIENTS[200]};
  border-radius: 8px;
  width: 100%;
  height: clamp(7.5rem, 5rem + 12.5vw, 16.25rem);

  img {
    width: clamp(11.875rem, 4.1071rem + 38.8393vw, 39.0625rem);
    position: absolute;
    bottom: 0;
    left: -48px;
  }
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT[300]};
  padding-left: 50%;

  h1 {
    font-family: 'Poppins', 'Roboto', sans-serif;
    font-size: clamp(0.875rem, 0.4107rem + 2.3214vw, 2.5rem);
    font-weight: 500;
    line-height: 140%;
  }

  p {
    font-size: clamp(0.75rem, 0.6786rem + 0.3571vw, 1rem);
  }
`;

export const Section = styled.section`
  position: relative;

  & + & {
    margin-top: 48px;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT[300]};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    margin-bottom: 24px;
  }
`;

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
