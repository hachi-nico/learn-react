import React from 'react';
import './ProfileCard.css';
import logo from './img/logo192.png';

const ProfileCard = (props) => {
  return (
    <div className='profile-container'>
      <img className='logo' src={logo} alt='Logo' />
      <div className='name'>{props.name}</div>
      <p>{props.desc}</p>
    </div>
  );
};

ProfileCard.defaultProps = {
  name: 'who?',
  desc: 'nothing',
};

export default ProfileCard;
