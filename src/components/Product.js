import React from 'react';
import { useParams } from 'react-router-dom';

const Product = ({ items }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Товар не найден</div>;
  }

  const { title, description, image, price } = item;

  return (
    <div className="product wrapper">
      <img className="product__image" src={'../../goods-images/' + image} alt={title} />
      <div className="product__details">
        <h3 className="product__title">{title}</h3>
        <p className="product__price">{price}₽</p>
        <p className='product__number'>Цена за 1 шт.</p>
        <div className='description-container'>
          <p className='product__description-title'>Описание</p>
          <hr className='product__description-line'></hr>
        </div>
        <p className="product__description">{description}</p>
      </div>
    </div>
  );
};

export default Product;