import React, { Component } from 'react';

export class Item extends Component {
    render() {
        return (
            <>
                <div className='item'>
                    <a className="link" href={`/products/${this.props.item.id}`}>
                        <img className='image' src={'./goods-images/' + this.props.item.image} />
                        <div className='good-container'>
                            <b className='price'>{this.props.item.price}₽</b>
                            <h3 className='name'>{this.props.item.title}</h3>
                            <p className='desc'>{this.props.item.description}</p>
                        </div>
                    </a>
                </div>
            </>
        )
    }
}

export default Item
