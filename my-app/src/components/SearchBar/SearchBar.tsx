import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from '../../meli-logo.png';
import searchIcon from '../../search-icon.png'
import './SearchBar.scss';
import axios from 'axios'
import { Results } from '../../App'

interface Props {
  setSearch: (e: Results[]) => void;
}

interface Form extends HTMLDivElement {
  query: HTMLInputElement;
}

function SearchBar({ setSearch}:Props) {
  const [items, setItems] = useState<Results[]>([])

  const navigate = useNavigate();

  function onSearch(event: any) {
    event.preventDefault();

    navigate(`/items?q=${event.target.query.value}`);

    const searchProduct = event.target.query.value

      axios.get("https://api.mercadolibre.com/sites/MLA/search?q=" + searchProduct + "&limit=4")
      .then(response => {setItems(response.data.results); return response.data.results})
      .then((items) => setSearch(items))
      .catch(error => console.log(error))

  }
  return (
      <header className="header">
        <nav className="nav">
          <Link to={"/"}>
            <div className="nav__mercadolibre-logo-container">
              <img src={logo} className="mercadolibre-logo-container__img" alt="mercadolibre-logo" />
            </div>
          </Link>
          <form action="" onSubmit={onSearch}>
            <input
                className="nav__input-search"
                type="text"
                name="query"
                placeholder="Nunca dejes de buscar"
            />
            <button className="nav__search-button" type="submit" >
              <img src={searchIcon} className="search-button__icon" alt="search-icon" />
            </button>
          </form>
        </nav>
      </header>
  );
}

export default SearchBar;
