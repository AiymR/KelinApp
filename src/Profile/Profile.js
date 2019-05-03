import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as userActions from '../actions/userActions';
import { connect } from 'react-redux';

import EditProfile from "./EditProfile";
import './Profile.css';
import { Button } from 'semantic-ui-react'
import photo from './profile.jpg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap,faHorse,faHeart ,faPalette} from '@fortawesome/free-solid-svg-icons'
import Redirect from "react-router-dom/es/Redirect";
library.add(faGraduationCap,faHorse,faHeart,faPalette);




class Profile extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //
  //   }
  // }
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/EditProfile/' />
    }
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
  return(
        <div className="profile-page">
          <div className="container">
            <div className="photo-profile">
              <img width="300px" alt="Photo" src={photo} />
            </div>
            <div className='profile-info'>
            <div className='basic-info'>

              <h2 className="text-bold">Айсауле, 22 года</h2>
              <h6>Aлматы, Казахстан</h6>
              <p className="text-bold">О себе:</p>
              <p>Красотка, комсомолка и просто хорошая девчонка</p>
              </div>
              <div className='profile-more-info'>

                <ul className='one-type text-bold'>
                  <li>{this.props.firstUser.title}</li>
                  <li><FontAwesomeIcon icon="graduation-cap" /> Образование:</li>
                  <li><FontAwesomeIcon icon="heart" /> Навыки: </li>
                  <li><FontAwesomeIcon icon="palette" /> Интересы:</li>
                  <li><FontAwesomeIcon icon="horse" /> Приданое и калым: </li>

                </ul>
                <ul className='one-type'>
                  <li>Высшее неоконченное</li>
                  <li>Готовлю беш на 30 человек</li>
                  <li>Гучи-шмучи, Пилатес,Пандора</li>
                  <li>Очень много всего</li>
                </ul>
                </div>

                <div className='edit-button'>
                {this.renderRedirect()}
                <Button onClick={this.setRedirect} color='yellow'>Edit profile</Button>
                </div>
              </div>
            </div>
      </div>
  );
}
}

function profileRoute() {
    return(
        <Profile/>
    )
}

const mapStateToProps = (state) => ({
  users: state.user.users,
  firstUser: state.user.firstUser
})

const mapDispatchToProps = {
  getUsers: userActions.getUsers,
  createUser: userActions.createUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
