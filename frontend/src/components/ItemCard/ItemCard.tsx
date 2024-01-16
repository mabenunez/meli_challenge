import React from 'react';
import './ItemCard.scss';

interface Props {
    thumbnail: string
    title: string
    price: string
}

function ItemCard({
    thumbnail,
    title,
    price
}:Props) {
  return (
    <li className='list-item'>
        <div className='item__img-container'>
            <img src={thumbnail} alt="" />
        </div>
        <div>
            <h2 className='item__title'>
                {title}
            </h2>
            <p className='item__price'>
                {price}
            </p>
        </div>
</li>
  );
}

export default ItemCard;
