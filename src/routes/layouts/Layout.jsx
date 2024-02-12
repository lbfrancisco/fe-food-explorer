import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Container } from "./styles";

export default function Layout() {
  return (
    <>
      <Header isAdmin={false} />
      <Container>
        <Outlet />
        <Footer />
      </Container>
    </>
  );
}
