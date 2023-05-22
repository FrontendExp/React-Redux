// src/store/reducers.js

const initialState = {
    users: [],
    loggedInUser: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_USER':
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      case 'LOGIN_USER':
        const { email, password } = action.payload;
        const user = state.users.find(
          (user) => user.email === email && user.password === password
        );
        return {
          ...state,
          loggedInUser: user ? user : null,
        };
      case 'LOGOUT_USER':
        return {
          ...state,
          loggedInUser: null,
        };
      case 'REMOVE_USER':
        return {
          ...state,
          users: state.users.filter((user) => user.email !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  