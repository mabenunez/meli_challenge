import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../meli-logo.png';
import searchIcon from '../../search-icon.png'
import '../../App.scss';

interface Props {
  search: string
  setSearch: (e: string) => void;
}
function SearchBar({ search, setSearch}:Props) {

  return (
      <header className="searchBarContainer">
        <nav className="nav">
          <Link to={"/"}>
            <div className="mercadolibre-logo-cont">
              <img src={logo} className="mercadolibre-logo" alt="mercadolibre-logo" />
            </div>
          </Link>
          <div>
            <input
              className="input-search"
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Nunca dejes de buscar"/>
          </div>
          <Link to={"/items?q=" + search }>
            <button  className="search-button">
              <img src={searchIcon} className="search-icon" alt="search-icon" />
            </button>
          </Link>
        </nav>
      </header>
  );
}

export default SearchBar;
