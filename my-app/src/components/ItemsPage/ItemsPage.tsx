import React from 'react';
import { Link } from "react-router-dom";
import ItemCard from '../ItemCard/ItemCard'
import { Results } from '../../App'
import '../../App.scss'

const currencyMap = {
    'ARS' : '$',
    'BOB' : 'Bs',
    'USD' : 'U$D',
    'COP' : '$',
    'BRL' : 'R$'
}

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
        <ul className='products-section-list'>
            {itemArray.map((item) => {
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
