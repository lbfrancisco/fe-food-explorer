import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  LogOutIcon, MenuIcon, Search, MenuSquare,
} from 'lucide-react';

import {
  Container, InputWrapper, Logo, ButtonContainer, ReceiptContainer, ReceiptQuantity,
} from './styles';

import logo from '../../assets/logo.svg';

import Button from '../Button';
import Input from '../Input';
import Menu from '../Menu';

import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import useSearch from "../../hooks/useSearch";
import SearchInput from "../SearchInput";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const { signOut, user } = useAuth();
  const { getCartTotalQuantity } = useCart();
  const { search, setSearch } = useSearch();

  function handleToggleMenu() {
    return setIsOpen((prevState) => !prevState);
  }

  function handleNewDish() {
    return navigate('/new');
  }

  function handleSignOut() {
    signOut();
    navigate('/');
  }

  return (
    <Container>
      {isOpen && <Menu isAdmin={user.admin} handleToggleMenu={handleToggleMenu} />}
      {user.admin ? (
        <>
          <button type="button" className="menu" onClick={handleToggleMenu}>
            <MenuIcon color="#fff" size={24} />
          </button>
          <Logo>
            <img src={logo} alt="logo food explorer" />
            <small>admin</small>
          </Logo>
        </>
      ) : (
        <>
          <ButtonContainer className="menu" onClick={handleToggleMenu}>
            <MenuIcon color="#fff" size={24} />
          </ButtonContainer>
          <Logo>
            <img src={logo} alt="logo food explorer" />
          </Logo>
        </>
      )}

      <InputWrapper className="input-wrapper">
        <SearchInput />
      </InputWrapper>

      {user.admin ? (
        <Button
          className="new-order"
          onClick={handleNewDish}
        >
          Novo prato
        </Button>
      ) : (
        <Button
          className="new-order"
          onClick={() => { }}
        >
          <MenuSquare color="#fff" size={24} />
          Pedidos ({getCartTotalQuantity})
        </Button>
      )}


      <ReceiptContainer className="receipt-mobile">
        <MenuSquare color="#fff" size={24} />
        <ReceiptQuantity>
          {getCartTotalQuantity}
        </ReceiptQuantity>
      </ReceiptContainer>

      <ButtonContainer className="logout-mobile" onClick={signOut}>
        <LogOutIcon size={32} color="#fff" />
      </ButtonContainer>
    </Container>
  );
}
