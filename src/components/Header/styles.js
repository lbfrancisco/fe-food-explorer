import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 128px;
  height: 104px;
  gap: 32px;

  background: ${({ theme }) => theme.COLORS.DARK[700]};

  img {
    width: clamp(9.375rem, 7.4821rem + 9.4643vw, 16rem);
  }

  .menu, .receipt-mobile {
    display: none;
  }

  @media screen and (max-width: 900px) {
    padding: 56px 24px 24px;

    .menu, .receipt-mobile {
      display: block;
      background: transparent;
      border: none;
    }

    > .input-wrapper, > .new-order, > .logout-mobile {
      display: none;
    }

    .logout {
      visibility: hidden;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;

  > svg {
    position: absolute;
    top: 50%;
    left: calc(156px - 8%);
    transform: translateY(-50%);
  }

  input {
    padding: 0 64px 0 156px;
  }

  & + button {
    max-width: 20%;
  }
`;

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
`;

export const ReceiptContainer = styled.div`
  position: relative;
`;

export const ReceiptQuantity = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -10px;
  right: -10px;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.TOMATO[100]};
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  font-weight: 500;
  font-size: 12px;
  line-height: 24%;
  border-radius: 50%;
`;

export const Logo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;

  img {
    width: clamp(7.5rem, 6.6429rem + 4.2857vw, 10.5rem);
  }

  small {
    color: ${({ theme }) => theme.COLORS.CAKE[200]};
    font-size: clamp(0.5rem, 0.4286rem + 0.3571vw, 0.75rem);
    line-height: 160%;
  }

  @media screen and (max-width: 900px) {
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
  }
`;
