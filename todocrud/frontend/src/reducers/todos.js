import {
  GET_TODOS,
  GET_TODO,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO 
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    // ...
    case GET_TODO:
    case ADD_TODO:
    case EDIT_TODO: 
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    // ...
  }
};