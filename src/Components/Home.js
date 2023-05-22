import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, removeUser } from '../store/action';
import { useNavigate } from 'react-router-dom';
import './home.css'

const Home = () => {
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(removeUser(loggedInUser.email)); // Remove the logged-in user from the state
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <div className='home-body'>
      <h1>Greetings, {loggedInUser && loggedInUser.name}!</h1>
      <table className='table-entry'>
        <thead>
          <tr style={{ fontSize: 'larger' }}>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h1 style={{ textTransform: 'uppercase', letterSpacing: '2px', paddingRight: '.5em' }}>
                {loggedInUser && loggedInUser.name}
              </h1>
            </td>
            <td>
              <h1>{loggedInUser && loggedInUser.email}</h1>
            </td>
          </tr>
        </tbody>
      </table>
      <button className='tab-btn' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
