import React from 'react';
import { Link } from "react-router-dom";
import ItemCard from '../ItemCard/ItemCard'
import { Results } from '../../types'; 
import { currencyMap } from '../../constants';
import './ItemsPage.scss'

interface Props {
    items : Results[]
}
function ItemsPage(items: Props) {

    const mapCurrencyId = (str: keyof typeof currencyMap) => {
        return currencyMap[str];
    }

    const itemArray = items.items

  return (
      <section className='products-section'>
        <ul className='products-section__list'>
            {itemArray.map((item) => {
                return (
                    <Link to={"/items/" + item.id } key={item.id} className='list__link'>
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
