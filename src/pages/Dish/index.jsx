import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Container, Content, DishDescription, StepperContainer, Tag, Tags } from './styles';
import { ArrowLeft } from 'lucide-react';

import Stepper from '../../components/Stepper';
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';
import { api } from "../../services/api";

export default function Dish() {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [image, setImage] = useState('');

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadDish() {
      const { id } = params;

      try {
        const response = await api.get(`/dishes/${id}`);
        const { dishes } = response.data;

        if (dishes[0].ingredients_list.length > 0) {
          const ingredientsArray = dishes[0].ingredients_list.split(',');
          const formattedIngredients = ingredientsArray.map(ingredient => {
            return { name: ingredient.trim() };
          });

          setIngredients(formattedIngredients);
        }

        setName(dishes[0].name);
        setDescription(dishes[0].description);
        setPrice(dishes[0].price);
        setImage(dishes[0].image);
      } catch {
        alert('Ocorreu um erro ao tentar buscar seu prato. Tente novamente!');
      }
    }

    loadDish();
  }, []);

  function handleEditDish() {
    const { id } = params;
    navigate(`/edit/${id}`)
  }

  return (
    <Container>
      <Link to="/">
        <ArrowLeft size={24} color="#fff" />
        <span>voltar</span>
      </Link>
      <Content>
        <img src={`${api.getUri()}/files/${image}`} alt={name} />
        <DishDescription>
          <h1>{name}</h1>
          <p>{description}</p>
          <Tags>
            {ingredients.map((ingredient, index) => {
              return (
                <Tag key={index}>{ingredient.name}</Tag>
              )
            })}
          </Tags>

          {user.admin ? (
            <StepperContainer>
              <Button onClick={handleEditDish}>
                Editar prato
              </Button>
            </StepperContainer>
          ) : (
            <StepperContainer>
              <Stepper />
              <Button onClick={() => {}}>
                incluir • R$ {price}
              </Button>
            </StepperContainer>
          )}
        </DishDescription>
      </Content>
    </Container>
  );
}
