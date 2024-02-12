import React from 'react';
import { Container, Content, DishDescription, StepperContainer, Tag, Tags } from './styles';

import { ArrowLeft } from 'lucide-react';

import gambe from '../../assets/dishes/gambe.png';
import Stepper from '../../components/Stepper';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function Dish() {
  const { user } = useAuth();

  return (
    <Container>
      <Link to="/">
        <ArrowLeft size={24} color="#fff" />
        <span>voltar</span>
      </Link>
      <Content>
        <img src={gambe} alt="" />
        <DishDescription>
          <h1>Spaguetti Gambe</h1>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
          <Tags>
            <Tag>alface</Tag>
            <Tag>rabanetes</Tag>
            <Tag>cebola</Tag>
            <Tag>alface</Tag>
            <Tag>rabanetes</Tag>
            <Tag>cebola</Tag>
          </Tags>

          {user.admin ? (
            <StepperContainer>
              <Button onClick={() => {}}>
                Editar prato
              </Button>
            </StepperContainer>
          ) : (
            <StepperContainer>
              <Stepper />
              <Button onClick={() => {}}>
                incluir • R$ 13,97
              </Button>
            </StepperContainer>
          )}
        </DishDescription>
      </Content>
    </Container>
  );
}
