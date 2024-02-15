import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  console.log(search);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export default function useSearch() {
  return useContext(SearchContext);
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
