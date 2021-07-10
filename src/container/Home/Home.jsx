import React, { Component, Fragment } from 'react'
import axios from 'axios';
import './Home.css'
import ProfileCard from '../../component/ProfileCard/ProfileCard'
// import Counter from '../Counter/Counter'

class Home extends Component {
  state = {
    profileData: [],
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       profileData: json,
    //     })
    //   })
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {        
        this.setState({
          profileData: res.data,
        })
      })
  }

  render() {
    return (
      <Fragment>
        <h1 className='heading'>My Profiles</h1>
        <div className='container'>
          {this.state.profileData.map((profileData) => {
            return <ProfileCard key={profileData.id} name={profileData.name} desc={profileData.username} />
          })}
        </div>
        {/* <div>
          <Counter />
        </div>        */}
      </Fragment>
    )
  }
}

export default Home
