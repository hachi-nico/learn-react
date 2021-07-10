import React, { Component, Fragment } from 'react'
import './Home.css'
import ProfileCard from '../../component/ProfileCard/ProfileCard'
// import Counter from '../Counter/Counter'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1 className='heading'>My Profiles</h1>
        <div className='container'>
          <ProfileCard name='nico' desc='Seorang yang jujur' />
          <ProfileCard name='akbar' desc='Seorang yang baik' />
          <ProfileCard />
        </div>
        {/* <div>
          <Counter />
        </div>        */}
      </Fragment>
    )
  }
}

export default Home
