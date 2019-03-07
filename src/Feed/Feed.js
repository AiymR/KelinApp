import React, { Component } from 'react';
import './Feed'
import Menu from './Menu'


import { Icon } from 'semantic-ui-react'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faDove } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


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
            bla
            <Menu/>
        </div>
        );
}

export default Feed;
