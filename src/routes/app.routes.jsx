import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Layout from './layouts/Layout';

import Home from '../pages/Home';
import Dish from '../pages/Dish';
import EditDish from '../pages/EditDish';

import useAuth from '../hooks/useAuth';
import NewDish from "../pages/NewDish";

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout isAdmin={user.admin} />}>
        <Route path="/" element={<Home isAdmin={user.admin} />} />
        <Route path="/dish/:id" element={<Dish />} />
        <Route path="/edit/:id" element={<EditDish />} />
        <Route path="/new" element={<NewDish />} />
      </Route>
    {/* { NotFound Route } */}
  </Routes>
  );
}
