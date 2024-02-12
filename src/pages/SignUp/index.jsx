import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';

import { Container } from './styles';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';

import { api } from '../../services/api';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSubmit() {
    if (!name || !email || !password) {
      return alert('Por favor, todos os campos devem ser preenchidos.');
    }

    api.post('/users', { name, email, password })
    .then(() => {
      alert('Usuário cadastrado com sucesso!');
      navigate('/');
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível cadastrar o usuário. Tente novamente.');
      }
    });
  }

  return (
    <Container>
      <img src={logo} alt="logo food explorer" />

      <Form title="Crie sua conta">
        <Input
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          onChange={(event) => setName(event.target.value)}
          value={name}
          />
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
          onClick={handleSubmit}
        >
          Criar conta
        </Button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
