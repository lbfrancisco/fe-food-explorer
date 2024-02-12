import React from 'react';
import { XIcon } from 'lucide-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Content, Header } from './styles';
import SearchInput from '../SearchInput';

export default function Menu({ isAdmin, handleToggleMenu }) {
  return (
    <Container>
      <Header>
        <button type="button" onClick={handleToggleMenu}>
          <XIcon color="#fff" size={24} />
        </button>
        <h2>Menu</h2>
      </Header>
      <Content>
        <SearchInput />
        <nav>
          <ul>
            {isAdmin
              && (
              <li>
                <Link to="/items/create">
                  Novo prato
                </Link>
              </li>
              )}
            {/* {!isAdmin
              && (
              <>
                <li>
                  <Link to="/history">
                    Meus pedidos
                  </Link>
                </li>
                <li>
                  <Link to="/favorites">
                    Favoritos
                  </Link>
                </li>
              </>
            )} */}
            <li>
              <Link to="/" onClick={handleToggleMenu}>
                Sair
              </Link>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
}

Menu.propTypes = {
  isAdmin: PropTypes.bool,
  handleToggleMenu: PropTypes.func,
};

Menu.defaultProps = {
  isAdmin: false,
  handleToggleMenu: () => {},
};
