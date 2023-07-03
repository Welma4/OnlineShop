import React, { Component } from 'react';
import Item from './item';

export class Items extends Component {
  render() {
    const { items } = this.props;

    return (
      <main>
        {items.map(element => ( 
          <Item key={element.id} item={element} />
        ))}
      </main>
    );
  }
}

export default Items;