import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const users = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_POSTS_SUCCESS:
      return action.users;
    case actionTypes.ACTION_CREATE_POST_SUCCESS:
      return [...action.users, action.user];
    case actionTypes.ACTION_GET_POSTS_STARTED:
    case actionTypes.ACTION_GET_POSTS_FAILED:
      return [];
    default:
      return state;
  }
};

const firstUser = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_POSTS_SUCCESS:
      return action.users[0];
    default:
      return state;
  }
}


const user = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ACTION_CREATE_POST_SUCCESS:
      return action.user;
    case actionTypes.ACTION_CREATE_POST_STARTED:
      return {};
    default:
      return state;
  }
};





const userReducer = combineReducers({
  users,
  firstUser,
  user
});

export default userReducer;
