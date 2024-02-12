import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Banner, Container, Section, Text
} from './styles';

import Carousel from '../../components/Carousel';

import banner from '../../assets/banner.png';
import gambe from '../../assets/dishes/gambe.png';

import useAuth from '../../hooks/useAuth';
import { api } from "../../services/api";

export default function Home() {
  const { user } = useAuth();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get('/categories');
        const { categories } = response.data;

        setCategories(categories);
      } catch(error) {
        console.log(error);
      }
    }

    loadCategories();
  }, []);

  const data = [
    {
      id: 1,
      image: '../../assets/dishes/gambe.png',
      name: 'Spaguetti Gambe',
      description: 'Descrição tudo certo legal',
      price: 79.58
    },
    {
      id: 2,
      image: '../../assets/dishes/gambe.png',
      name: 'Spaguetti Gambe',
      description: 'Descrição tudo certo legal',
      price: 79.58
    },
    {
      id: 3,
      image: '../../assets/dishes/gambe.png',
      name: 'Spaguetti Gambe',
      description: 'Descrição tudo certo legal',
      price: 79.58
    },
    {
      id: 4,
      image: {gambe},
      name: 'Spaguetti Gambe',
      description: 'Descrição tudo certo legal',
      price: 79.58
    }
  ];

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
              <Carousel data={data} isAdmin={user.admin} />
            </Section>
          )
        })
      )}
    </Container>
  );
}
