import React from 'react';
import avatar from '../images/avatar.jpg';
import loop from '../images/loop.png';
import cart from '../images/cart.svg';

export default function header() {
    return (
        <header>
            <div className='main'>
                <span className='logo'>Your Shkaf</span>
                <div>
                    <ul className='list'>
                        <li className='list__item'>
                            <a href='/' className='list__item_link'>
                                <span>Главная страница</span>
                            </a>
                        </li>
                        <li className='list__item'>
                            <a href='#' className='list__item_link'>
                                <span>Контакты</span>
                            </a>
                        </li>
                        <li className='list__item'>
                            <a href='#' className='list__item_link'>
                                <span>О нас</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='search-container'>
                <form>
                    <div className='search-menu'>
                        <input className='search-menu__field' type="text" placeholder="Поиск мебели..."></input>
                            <button className='search-menu__button'>
                                <img className='loop' src={loop} />
                            </button>
                    </div>
                </form>
                <div className='nav-buttons'>
                    <a className='avatar_link' href='#'>
                        <img className='avatar' src={avatar} alt='icon' />
                        <span className='nav-buttons__sign' href='#'>Войти</span>
                    </a>
                    <a className='cart_link' href='#'>
                        <img className='cart' src={cart} alt='cart' />
                    </a>
                </div>
            </div>

        </header>
    )
}
