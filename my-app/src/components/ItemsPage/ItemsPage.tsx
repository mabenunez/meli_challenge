import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import ItemCard from '../ItemCard/ItemCard'
import '../../App.scss'

const currencyMap = {
    'ARS' : '$',
    'BOB' : 'Bs',
    'USD' : 'U$D',
    'COP' : '$',
    'BRL' : 'R$'
}

interface results {
    id: string
    thumbnail: string
    currency_id: "ARS" | "BOB" | "USD" | "COP" | "BRL"
    title: string
    price: number
}

function ItemsPage() {

    const [items, setItems] = useState<results[]>([])
    const [params, setParams] = useState<string | null>("")

    const fetchItems = () => {
        const urlParams = new URLSearchParams (window.location.search);
        const searchProduct = urlParams.get('q')

        if(params !== searchProduct) {
            axios.get("https://api.mercadolibre.com/sites/MLA/search?q=" + searchProduct + "&limit=4")
            .then(response => {setItems(response.data.results); return response.data})
            .then(() => setParams(searchProduct))
            .catch(error => console.log(error))
        }
    }

    useEffect(() => {
        fetchItems()
    }, [])

    const mapCurrencyId = (str: keyof typeof currencyMap) => {
        return currencyMap[str];
    }

  return (
      <section className='products-section'>
        <ul className='products-section-list'>
            {items.map((item) => {
                return (
                    <Link to={"/items/" + item.id } key={item.id}>
                        <ItemCard
                            thumbnail={item.thumbnail}
                            title={item.title}
                            price={`${mapCurrencyId(item.currency_id)} ${item.price.toLocaleString("es-ES")}` }
                        />
                    </Link>
                    
                )
            })}
        </ul>
      </section>
  );
}

export default ItemsPage;
