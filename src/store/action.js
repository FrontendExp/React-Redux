// src/store/actions.js
export const registerUser = (userData) => {
    return {
      type: 'REGISTER_USER',
      payload: userData,
    };
  };
  
  export const loginUser = (email, password) => {
    return {
      type: 'LOGIN_USER',
      payload: { email, password },
    };
  };
  
// src/store/actions.js

export const logoutUser = () => {
    return {
      type: 'LOGOUT_USER',
    };
  };
  
  export const removeUser = (email) => {
    return {
      type: 'REMOVE_USER',
      payload: email,
    };
  };
  