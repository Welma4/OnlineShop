import React, { Component } from 'react';
import star from '../images/star.png';

export class Item extends Component {
    render() {
        const { item } = this.props;

        return (
            <>
                <div className='item'>
                    <a className="link" href={`/products/${item.id}`}>
                        <img className='image' src={`./goods-images/${item.images[0]}`} alt='item'/>
                        <div className='good-container'>
                            <b className='price'>{item.price}₽</b>
                            <div className='reviews'>
                                <img className='reviews__star' src={star} alt='star'/> 
                                <p className='reviews__rating'>{item.rating}</p>
                                <li className='reviews__point'></li>
                                <p className='reviews__voted'>{item.voted} отзывов</p>
                            </div>

                            <h3 className='name'>{item.title}</h3>
                            <p className='desc'>{item.description}</p>
                        </div>
                    </a>
                </div>
            </>
        );
    }
}

export default Item;