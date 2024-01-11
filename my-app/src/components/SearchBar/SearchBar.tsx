import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../meli-logo.png';
import searchIcon from '../../search-icon.png'
import '../../App.scss';

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
      <header className="searchBarContainer">
        <nav className="nav">
          {/* <Link to={"/"}> */}
            <div className="mercadolibre-logo-cont">
              <img src={logo} className="mercadolibre-logo" alt="mercadolibre-logo" />
            </div>
          {/* </Link> */}
          <div>
            <input
              className="input-search"
              // onChange={() => setSearch(e.target.value)}
              type="text"
              placeholder="Nunca dejes de buscar"/>
          </div>
          {/* <Link to={"/items?q=" + this.props.search }> */}
            <button  className="search-button">
              <img src={searchIcon} className="search-icon" alt="search-icon" />
            </button>
          {/* </Link> */}
        </nav>
      </header>
  );
}

export default SearchBar;
