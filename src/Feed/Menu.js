import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './Menu.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faDove } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'

import Profile from '../Profile/Profile'
import Feed from './Feed'
import Chat from '../Chat/Chat'




library.add(faComments,
    faUser,
    faDove,
    faLocationArrow,
    faStar,
    faBookmark,
    faTasks)


function Menu() {
    return(
        <Router>

            <div className='menu'>
                <ul className='fa-ul'>
                    <li>
                        <Link to='/profile/'>
                             <span className="fa-li">
                                <FontAwesomeIcon icon='user' />
                            </span>
                                Профиль
                        </Link>
                    </li>
                    <li>
                        <Link to='/chat/'>
                            <span className="fa-li">
                                <FontAwesomeIcon icon='comments' />
                            </span>
                                Чаты
                        </Link>
                    </li>
                    <li>
                        <Link to='/feed/'>
                            <span className="fa-li">
                                <FontAwesomeIcon icon='dove' />
                            </span>
                                Лента
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <span className="fa-li">
                                <FontAwesomeIcon icon='location-arrow' />
                            </span>
                                Кто рядом
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <span className="fa-li">
                                <FontAwesomeIcon icon='bookmark' />
                            </span>
                                Закладки
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <span className="fa-li">
                                <FontAwesomeIcon icon='star' />
                            </span>
                                Популярность
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <span className="fa-li">
                                <FontAwesomeIcon icon='tasks' />
                            </span>
                                Задания
                        </Link>
                    </li>
                </ul>
            </div>

        </Router>

    );
}



export default Menu;
