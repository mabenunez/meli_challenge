import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../../App.scss'
import './ProductDetail.scss'
import { Results } from '../../types';
import { currencyMap, productConditionMap } from '../../constants';

function ProductDetail() {

    const [ loading, setLoading ] = useState<boolean>(true)
    const [ item, setItem ] = useState<Results>({
        id: '',
        thumbnail: '',
        currency_id: "ARS",
        title: '',
        price: 0,
        pictures: [],
        condition: 'new'
    })
    const [ itemDescription, setItemDescription ] = useState<string>('')

    const mapCurrencyId = (str: keyof typeof currencyMap) => {
        return currencyMap[str];
    }

    const { id } = useParams();

    useEffect(() => {
        axios.get("https://api.mercadolibre.com/items/" + id )
        .then(response => {setItem(response.data); return response.data})
        .catch(error => console.log(error))

        axios.get("https://api.mercadolibre.com/items/" + id + '/description')
        .then(response => {setItemDescription(response.data.plain_text); return response.data.plain_text})
        .then(() => setLoading(false))
        .catch(error => console.log(error))
    }, [])

  return (
    <section className='product-detail-section'>
            {loading 
                ? <div>cargando</div>
                : (
                    <div className='detail-container'>
                        <div className='detail-container__left-column'>
                            <div>
                                <img src={item.pictures[0].url} alt="imagen-de-producto" />
                            </div>
                            <div>
                                <h3>
                                    Descripción del producto
                                </h3>
                                <p>
                                    {itemDescription}
                                </p>
                            </div>
                        </div>
                        <div className='detail-container__right'>
                            <span>{productConditionMap[item.condition]}</span>
                            <h2>{item.title}</h2>
                            <p className='item-price'>
                                {`${mapCurrencyId(item.currency_id)} ${item.price.toLocaleString("es-ES")}` }
                            </p>
                            <button className='buy-button'>Comprar</button>
                        </div>
                    </div>
                )
            }
        
    </section>
  );
}

export default ProductDetail;
