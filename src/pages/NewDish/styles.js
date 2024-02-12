import styled from 'styled-components';

export const Container = styled.form`
  min-height: 100vh;
  padding: 24px;

  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.COLORS.LIGHT[300]};

  &:first-child {
    flex-grow: 0 !important;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    gap: 8px;
    max-width: max-content;

    margin-bottom: 24px;

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

  > button#save {
    display: flex;
    align-items: center;
    gap: 8px;

    max-width: max-content;
    padding: 14px;
    margin-top: 24px;

    border: none;
    border-radius: 4px;
    background: ${({ theme }) => theme.COLORS.TOMATO[400]};
    color: ${({ theme }) => theme.COLORS.LIGHT[200]};
    transition: background 0.2s;
  }

  > button#save:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO[300]};
  }

  @media screen and (min-width: 768px) {
    padding: 40px 124px 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  flex-direction: column;
  gap: 32px;

  & + & {
    margin-top: 24px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT[400]};
  }

  > textarea {
    min-height: 172px;
    resize: vertical;
  }

  > select, textarea {
    background: ${({ theme }) => theme.COLORS.DARK[800]};
    color: ${({ theme }) => theme.COLORS.LIGHT[300]};
    height: 48px;
    padding: 12px 14px;
    border-radius: 8px;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT[500]};
    }
  }

  > input {
    background: ${({ theme }) => theme.COLORS.DARK[800]};
    color: ${({ theme }) => theme.COLORS.LIGHT[200]};
    height: 48px;
    padding: 12px 14px;
    border-radius: 8px;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT[500]};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const CustomInputFile = styled.div`
  position: relative;
  background: ${({ theme }) => theme.COLORS.DARK[800]};
  color: ${({ theme }) => theme.COLORS.LIGHT[200]};
  width: 100%;
  height: 48px;
  padding: 12px 14px;
  border-radius: 8px;
  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.COLORS.DARK[1000]};
  }

  > input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;

    cursor: pointer;
  }
`;

export const TagsContainer = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK[800]};
  color: ${({ theme }) => theme.COLORS.LIGHT[200]};
  min-height: 48px;
  padding: 12px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`;
