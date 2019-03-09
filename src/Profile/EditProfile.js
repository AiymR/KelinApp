import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './EditProfile.css';
import Profile from "./Profile";
import { Button,Form } from 'semantic-ui-react'
import photo from './profile.jpg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap,faHorse,faHeart ,faPalette} from '@fortawesome/free-solid-svg-icons'
library.add(faGraduationCap,faHorse,faHeart,faPalette);


class EditProfile extends Component {
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
      return <Redirect to='/Profile/' />
    }
  }
  render() {
  return(
        <div className="profile-page">
          <div className="container">
            <div className="photo-profile">
              <img width="300px" alt="Photo" src={photo} />
            </div>
            <div className='profile-info'>
            <Form>
                <Form.Field>
                    <label>Имя</label>
                    <input value='Сауле' />
                </Form.Field>
                <Form.Field>
                    <label>Фамилия</label>
                    <input placeholder='Фамилия' />
                </Form.Field>
                 <Form.TextArea label='О себе' value='Красотка, комсомолка и просто хорошая девчонка'/>

                 <Form.Field>
                     <label><FontAwesomeIcon icon="graduation-cap" /> Образование:</label>
                     <input value='Высшее неоконченное' />
                 </Form.Field><Form.Field>
                     <label><FontAwesomeIcon icon="heart" /> Навыки:</label>
                     <input value='Готовлю беш на 30 человек' />
                 </Form.Field>
                 <Form.Field>
                     <label><FontAwesomeIcon icon="palette" /> Интересы:</label>
                     <input value='Гучи-шмучи, Пилатес,Пандора' />
                 </Form.Field>
                 <Form.Field>
                     <label><FontAwesomeIcon icon="horse" /> Приданое и калым:</label>
                     <input value='Очень много всего' />
                 </Form.Field>
                 {this.renderRedirect()}
                <Button onClick={this.setRedirect} type='submit'>Сохранить</Button>
                </Form>
              </div>
            </div>
      </div>
  );
}
}

export default EditProfile;
