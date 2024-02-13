import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { LogOutIcon, MenuSquare, MenuIcon } from 'lucide-react';
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
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();
  const { signOut, user } = useAuth();

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

          <InputWrapper className="input-wrapper">
            <Search color="#fff" size={24} />
            <Input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Busque por pratos ou ingredientes"
            />
          </InputWrapper>

          <Button
            className="new-order"
            onClick={handleNewDish}
          >
            Novo prato
          </Button>

          <ButtonContainer className="logout" onClick={handleSignOut}>
            <LogOutIcon size={32} color="#fff" />
          </ButtonContainer>
        </>
      ) : (
        <>
          <ButtonContainer className="menu" onClick={handleToggleMenu}>
            <MenuIcon color="#fff" size={24} />
          </ButtonContainer>
          <Logo>
            <img src={logo} alt="logo food explorer" />
          </Logo>

          <InputWrapper className="input-wrapper">
            <Search color="#fff" size={24} />
            <Input type="search" placeholder="Busque por pratos ou ingredientes" />
          </InputWrapper>

          <Button
            className="new-order"
            onClick={() => {}}
          >
            <MenuSquare color="#fff" size={24} />
            Pedidos (0)
          </Button>

          <ReceiptContainer className="receipt-mobile">
            <MenuSquare color="#fff" size={24} />
            <ReceiptQuantity>
              0
            </ReceiptQuantity>
          </ReceiptContainer>

          <ButtonContainer className="logout-mobile" onClick={signOut}>
            <LogOutIcon size={32} color="#fff" />
          </ButtonContainer>
        </>
      )}
    </Container>
  );
}
