import React, { useEffect, useState } from 'react';
import {
  Banner, Container, Section, Text
} from './styles';

import Carousel from '../../components/Carousel';

import banner from '../../assets/banner.png';

import useAuth from '../../hooks/useAuth';
import useSearch from '../../hooks/useSearch';

import { api } from "../../services/api";

export default function Home() {
  const { user } = useAuth();
  const { search } = useSearch();

  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);

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

  useEffect(() => {
    setFilteredDishes(filterItemsByCategoryAndSearch(dishes, categories, search));
  }, [dishes, categories, search]);

  function filterItemsByCategoryAndSearch(items, categories, search) {
    if (!categories || !search) {
      return items;
    }

    const lowercaseSearch = search.toLowerCase();

    const filteredByCategory = categories.reduce((filteredItems, category) => {
      const categoryItems = items.filter(item => item.category_name === category.name);
      return [...filteredItems, ...categoryItems];
    }, []);

    const filteredBySearch = filteredByCategory.filter(item => {
      return (
        item.name.toLowerCase().includes(lowercaseSearch) ||
        item.ingredients_list.toLowerCase().includes(lowercaseSearch)
      );
    });

    return filteredBySearch;
  }

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
          const filteredItemsForCategory = filteredDishes.filter(dish => dish.category_name === category.name);
          return (
            <Section key={category.id}>
              <h1>{category.name}</h1>
              <Carousel data={filteredItemsForCategory} isAdmin={user.admin} />
            </Section>
          )
        })
      )}
    </Container>
  );
}
