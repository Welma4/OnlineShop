import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from './carousel';
import star from '../images/star.png';

const Product = ({ items }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Товар не найден</div>;
  }

  const { title, description, price, voted, reviews, reviewers } = item;

  return (
    <div className='wrapper'>
      <div className="product">
        <Carousel item={item} />
        <div className="product__details">
          <h3 className="product__title">{title}</h3>
          <div className='reviews'>
            <img className='reviews__star' src={star} alt='star' />
            <p className='reviews__rating'>{item.rating}</p>
          </div>
          <p className="product__price">{price}₽</p>
          <p className='product__number'>Цена за 1 шт.</p>
          <button className='product__button' >Добавить в корзину</button>
          <div className='description-container'>
            <p className='product__description-title'>Описание</p>
            <hr className='product__description-line'></hr>
          </div>
          <p className="product__description">{description}</p>
        </div>
      </div>
      <div className='product-reviews'>
        <p className='product-reviews__title'>Отзывы о товаре: {voted}</p>
        <hr className='product-reviews__line'></hr>
        {reviews.map((review, index) => (
          <div className='review-container' key={index}>
            <div className='review-text-container'>
              <div className='name-rating-container'>
                <p className='product-reviews__reviewer'>{reviewers[index]}</p>
                <img className='product-reviews__star' src={star} alt='star' />
                <p className='product-reviews__personal-rating'>{item.personalRating[index]}</p>
              </div>
              <p className='product-reviews__review'>{review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;