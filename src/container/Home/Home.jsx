import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './Home.css'
import ProfileCard from '../../component/ProfileCard/ProfileCard'
// import Counter from '../Counter/Counter'

class Home extends Component {
  state = {
    profileData: [],
  }

  getProfileAPI = () => {
    axios.get('http://localhost:3000/profile').then((res) => {
      this.setState({
        profileData: res.data,
      })
    })
  }

  removeBtn = (val) => {
    axios
      .delete(`http://localhost:3000/profile/${val}`)
      .then(() => this.getProfileAPI())
  }

  componentDidMount() {
    this.getProfileAPI()
  }

  render() {
    return (
      <Fragment>
        <h1 className='heading'>My Profiles</h1>
        <div className='container'>
          {this.state.profileData.map((profileData) => {
            return (
              <ProfileCard
                key={profileData.id}
                data={profileData}
                remove={this.removeBtn}
              />
            )
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
