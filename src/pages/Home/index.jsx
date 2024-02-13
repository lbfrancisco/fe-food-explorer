import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Banner, Container, Section, Text
} from './styles';

import Carousel from '../../components/Carousel';

import banner from '../../assets/banner.png';

import useAuth from '../../hooks/useAuth';
import { api } from "../../services/api";

export default function Home() {
  const { user } = useAuth();

  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get('/categories');
        const { categories } = response.data;

        setCategories(categories);
      } catch {
        alert('Falha ao carregar as categorias! Tente novamente mais tarde.')
      }
    }

    async function loadDishes() {
      try {
        const response = await api.get('/dishes');
        const { dishes } = response.data;

        setDishes(dishes);
      } catch {
        alert('Falha ao carregar os pratos! Tente novamente mais tarde.')
      }
    }

    loadCategories();
    loadDishes();
  }, []);

  return (
    <Container>
      <Banner>
        <img src={banner} alt="banner burger and fruits" />
        <Text>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </Text>
      </Banner>

      {categories && Array.isArray(categories) && (
        categories.map((category) => {
          return (
            <Section key={category.id}>
              <h1>{category.name}</h1>
              <Carousel data={dishes.filter((dish) => dish.category_name === category.name)} isAdmin={user.admin} />
            </Section>
          )
        })
      )}
    </Container>
  );
}
