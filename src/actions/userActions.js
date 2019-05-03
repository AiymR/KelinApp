import * as actionTypes from '../constants/actionTypes';
import * as userApi from '../api/userApi';

export const getUsers = () => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_GET_POSTS_STARTED
  })

  userApi
    .getUsers()
    .then(
      response => {
        response
          .text()
          .then(
            value => {
              const users = JSON.parse(value);
              dispatch({
                type: actionTypes.ACTION_GET_POSTS_SUCCESS,
                users,
              });
            }
          );
      }
    )

}

export const createUser = (data) => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_CREATE_POST_STARTED
  })

  userApi
    .createUser(data)
    .then(
      response => {
        response
          .text()
          .then(
            value => {
              const responseObject = JSON.parse(value);
              console.log(responseObject);
              dispatch({
                type: actionTypes.ACTION_CREATE_POST_SUCCESS,
                user: responseObject,
                users: getState().user.users
              });
            }
          );
      }
    )

}
