import React, { useState, useEffect } from 'react';
import axios from 'axios'
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

interface Props {
    condition: string
    id?: string
    picture: string
    currency_id: "ARS" | "BOB" | "USD" | "COP" | "BRL"
    title: string
    price: number
    description: string
}

function ProductDetail({
    condition,
    id,
    picture,
    currency_id,
    title,
    price,
    description
}:Props) {

    const mapCurrencyId = (str: keyof typeof currencyMap) => {
        return currencyMap[str];
    }

  return (
    <section className='product-detail-section'>
        <div className='product-detail-container'>
            <div className='product-detail-left'>
                <div>
                    <img src={picture} alt="" />
                </div>
                <div>
                    <h3>
                        Descripción del producto
                    </h3>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
            <div className='product-detail-right'>
                <span>{condition}</span>
                <h2>{title}</h2>
                <p className='item-price'>
                    {`${mapCurrencyId(currency_id)} ${price.toLocaleString("es-ES")}` }
                </p>
                <button>Comprar</button>
            </div>
        </div>
    </section>
  );
}

export default ProductDetail;
