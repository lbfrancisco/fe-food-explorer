import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Stepper from '../Stepper';
import Button from '../Button';

import { Action, Card, Section, StepperContainer } from './styles';

import { Edit, Heart } from 'lucide-react';

import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';

import Splide from '@splidejs/splide';
import '@splidejs/splide/css/skyblue';
import { api } from "../../services/api";

export default function Carousel({ data }) {
  const [favorites, setFavorites] = useState([]);

  const { user } = useAuth();
  const { addToCart } = useCart();

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

  function handleDishViewNavigate(id) {
    navigate(`/dish/${id}`);
  }

  function handleToggleFavorite(id) {
    if (favorites.find((favorite) => favorite === id)) {
      setFavorites((prev) => prev.filter(favorite => favorite !== id));
    } else {
      setFavorites((prev) => [...prev, id]);
    }
  }

  function handleAddToCart(dish) {
    const dishToCart = {
      id: dish.id,
      price: dish.price,
      quantity: 1,
    }

    addToCart(dishToCart);
  }

  return (
    <Section id={`splide-${id}`} className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          {data.map((dish) =>
            <Card key={dish.id} className="splide__slide">
              <img src={`${api.getUri()}/files/${dish.image}`} alt={dish.name} />
              <button onClick={() => handleDishViewNavigate(dish.id)}>
                <h2>{dish.name} {'>'}</h2>
              </button>
              <p>{dish.description}</p>
              <span>R$ {dish.price}</span>

              {!user.admin && (
                <StepperContainer>
                  <Stepper />
                  <Button onClick={() => handleAddToCart(dish)}>
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
                <Action onClick={() => handleToggleFavorite(dish.id)}>
                  {favorites.find((favorite) => favorite === dish.id) ? (
                    <Heart
                      size={24}
                      color="#fff"
                      fill="#fff"
                    />
                  ) : (
                    <Heart
                      size={24}
                      color="#fff"
                    />
                  )}
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
