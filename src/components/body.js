import React from 'react';

export default function Topblock(props) {
  return (
    <div>
      <div className='presentation'>
        {/* <img /> */}
      </div>
      <div className='back'>
        <ul className='navigation wrapper'>
          <li className='navigation__item'>
            <a href='#' className='navigation__item_link' onClick={() => props.onCategorySelect('Шкафы')}>
              Шкафы
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__item_link' onClick={() => props.onCategorySelect('Кровати')}>
              Кровати
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__item_link' onClick={() => props.onCategorySelect('Стулья')}>
              Стулья
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__item_link' onClick={() => props.onCategorySelect('Столы')}>
              Столы
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__item_link' onClick={() => props.onCategorySelect('Прихожая')}>
              Прихожая
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}