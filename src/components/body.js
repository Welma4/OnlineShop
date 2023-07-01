import React from 'react'

export default function body() {
    return (
        <div>
            <div className='presentation'>
                {/* <img /> */}
            </div>
            <div className='back'>
                <ul className='navigation wrapper'>
                    <li className='navigation__item'>
                        <a href='#' className='navigation__item_link'>Шкафы</a>
                    </li>
                    <li className='navigation__item'>
                        <a href='#' className='navigation__item_link'>Кровати</a>
                    </li>
                    <li className='navigation__item'>
                        <a href='#' className='navigation__item_link'>Стулья</a>
                    </li>
                    <li className='navigation__item'>
                        <a href='#' className='navigation__item_link'>Столы</a>
                    </li>
                    <li className='navigation__item'>
                        <a href='#' className='navigation__item_link'>Прихожая</a>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}
