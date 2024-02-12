import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';

import { Container } from './styles';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';

import useAuth from '../../hooks/useAuth';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleLogin(event) {
    if (!email || !password) {
      return alert('Por favor, todos os campos devem ser preenchidos.');
    }

    const user = {
      email,
      password
    }

    signIn(user);
  }

  return (
    <Container>
      <img src={logo} alt="logo food explorer" />

      <Form title="Faça login">
        <Input
          type="email"
          label="Email"
          placeholder="Exemplo: exemplo@mail.com.br"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <Input
          type="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <Button
          onClick={handleLogin}
        >
          Entrar
        </Button>
        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
