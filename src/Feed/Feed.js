import React, { Component } from 'react';
import './Feed.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faDove } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Menu from './Menu'
import Header from "./Header";
import PhotoSlider from "./PhotoSlider";
import InfoCard from "./InfoCard";


library.add(faComments,
            faUser,
            faDove,
            faLocationArrow,
            faStar,
            faBookmark,
            faTasks)




function Feed() {
    return (
        <div className="feed">
            <div className="feedContent">
                <div className="feedRight">
                    <InfoCard/>
                </div>
                <div className='feedCenter'>
                    <PhotoSlider/>
                </div>

            </div>

        </div>
        );
}

export default Feed;
