import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Stepper from '../Stepper';
import Button from '../Button';

import { Action, Card, Section, StepperContainer } from './styles';

import { Edit, Heart } from 'lucide-react';

import molla from '../../assets/dishes/molla.png';
import useAuth from '../../hooks/useAuth';

import Splide from '@splidejs/splide';
import '@splidejs/splide/css/skyblue';
import { api } from "../../services/api";

export default function Carousel({ data }) {
  const { user } = useAuth();

  const id = crypto.randomUUID();
  const navigate = useNavigate();

  useEffect(() => {
    new Splide(`#splide-${id}`, {
      focus: 'left',
      pagination: false,
      autoWidth: true,
    }).mount()
  }, [data])

  function handleEditDishNavigate(id) {
    navigate(`/edit/${id}`);
  }

  console.log();

  return (
    <Section id={`splide-${id}`} className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          {data.map((dish) =>
            <Card key={dish.id} className="splide__slide">
              <img src={`${api.getUri()}/files/${dish.image}`} alt={dish.name} />
              <h2>{dish.name} {'>'}</h2>
              <p>{dish.description}</p>
              <span>R$ {dish.price}</span>

              {!user.admin && (
                <StepperContainer>
                  <Stepper />
                  <Button onClick={() => {}}>
                    incluir
                  </Button>
                </StepperContainer>
              ) }

              {user.admin ? (
                <Action
                  onClick={() => handleEditDishNavigate(dish.id)}
                >
                  <Edit size={24} color="#fff" />
                </Action>
              ) : (
                <Action>
                  <Heart size={24} color="#fff" />
                </Action>
              )}
            </Card>
          )}
        </ul>
      </div>
    </Section>
  );
}

Carousel.propTypes = {
  data: PropTypes.array.isRequired
};
