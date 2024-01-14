import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {Route, useNavigate} from "react-router-dom";
import logo from '../../meli-logo.png';
import searchIcon from '../../search-icon.png'
import '../../App.scss';

interface Props {
  search: string
  setSearch: (e: string) => void;
}

interface Form extends HTMLDivElement {
  query: HTMLInputElement;
}

function SearchBar({ search, setSearch}:Props) {

  const navigate = useNavigate();

  function onSearch(event: any) {
    event.preventDefault();

    navigate(`/items?q=${event.target.query.value}`);
  }
  return (
      <header className="searchBarContainer">
        <nav className="nav">
          <Link to={"/"}>
            <div className="mercadolibre-logo-cont">
              <img src={logo} className="mercadolibre-logo" alt="mercadolibre-logo" />
            </div>
          </Link>
          <form action="" onSubmit={onSearch}>
          <input
              className="input-search"
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              name="query"
              placeholder="Nunca dejes de buscar"/>
            
          </form>
          {/* <form action='/items'>
            <input
              className="input-search"
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Nunca dejes de buscar"/>
          </form> */}
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
