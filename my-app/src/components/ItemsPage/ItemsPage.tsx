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
    const [params, setParams] = useState("")

    const fetchItems = () => {
        const urlParams = new URLSearchParams (window.location.search);
        const searchProduct = urlParams.get('q')

        if(params !== searchProduct) {
            axios.get("https://api.mercadolibre.com/sites/MLA/search?q=" + searchProduct + "&limit=4")
            // .then(res => console.log(res.data.results))
            .then(response => {setItems(response.data.results); return response.data})
            .catch(error => console.log(error))
        }
    }

    useEffect(() => {
        fetchItems()
        console.log(items)
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

        <button onClick={ () => fetchItems}>n</button>

      </section>
  );
}

export default ItemsPage;
