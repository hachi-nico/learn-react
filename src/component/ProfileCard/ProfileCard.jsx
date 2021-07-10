import React from 'react'
import './ProfileCard.css'
import logo from './img/logo192.png'

const ProfileCard = (props) => {
  return (
    <div className='profile-container'>
      <img className='logo' src={logo} alt='Logo' />
      <div className='name'>{props.data.name}</div>
      <p>{props.data.desc}</p>
      <button onClick={() => props.remove(props.data.id)}>Remove</button>
    </div>
  )
}

ProfileCard.defaultProps = {
  name: 'who?',
  desc: 'nothing',
}

export default ProfileCard
