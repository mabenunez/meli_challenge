import React, {useState} from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import ItemsPage from './components/ItemsPage/ItemsPage';
import ProductDetail from './components/ProductDetail/ProductDetail'

function App() {
  const [search, setSearch] = useState("");

  return (
      <div className="App">
        <BrowserRouter>
          <SearchBar
            search={search}
            setSearch={(search) => setSearch(search)}
          />
          <Routes>
          <Route path="/items" element={<ItemsPage/>}/>
          <Route
            path="/items/:id"
            element={
              <ProductDetail
              condition={'new'}
              picture={"http://http2.mlstatic.com/D_898290-MLA31003118647_062019-O.jpg"}
              currency_id={'ARS'}
              title={'iPhone 6s 32 Gb Gris Espacial'}
              price={10000000}
              description={'Momentos únicos, capturas reales Capturá tus mejores momentos y revivilos cuando quieras con la cámara trasera de 12 Mpx. Además, el dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Más para ver Con su pantalla IPS de 4.7", disfrutá de colores intensos y mayor nitidez en todos tus contenidos.'}
              />
            }/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
