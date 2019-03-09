import React, { Component } from 'react';
import './Header.css'
import profilepic from './saule.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faCogs} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';

library.add(faCogs, faBell)

function Header() {
    return(
        <div className="thisHeader">
            <div className="headerContent">
                <div className='logo'>
                    KelinFinder
                </div>
                <div className="iconsRight">
                    <FontAwesomeIcon icon='bell' className='icon'/>
                    <FontAwesomeIcon icon='cogs' className='icon'/>
                    <img src={profilepic} alt="" className='headerImage'/>
                </div>
            </div>
        </div>
    );

}

export default Header
