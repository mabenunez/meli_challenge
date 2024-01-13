import React from 'react';
import '../../App.scss';

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
    <div className='item-img-container'>
        <img src={thumbnail} alt="" />
    </div>
    <div>
        <h2 className='item-title'>
            {title}
        </h2>
        <p className='item-price'>
            {price}
        </p>
    </div>
</li>
  );
}

export default ItemCard;
