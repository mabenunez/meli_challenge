import React, {useState} from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import SearchBar from './components/SearchBar/SearchBar';
import ItemsPage from './components/ItemsPage/ItemsPage';
import ProductDetail from './components/ProductDetail/ProductDetail'
import { Results } from './types';
import './App.scss';

function App() {

  const [items, setItems] = useState<Results[]>([])

  return (
      <div className="App">
        <BrowserRouter>
          <SearchBar
            setSearch={(results) => setItems(results)}
          />
          <Routes>
          <Route path="/items" element={<ItemsPage items={items} />}/>
          <Route
            path="/items/:id"
            element={
              <ProductDetail />
            }/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
