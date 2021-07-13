import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './Home.css'
import ProfileCard from '../../component/ProfileCard/ProfileCard'

class Home extends Component {
  state = {
    profileData: [],
    profileForm: {
      id: 1,
      name: '',
      desc: '',
    },
    isUpdate: false,
  }

  getProfileAPI = () => {    
    axios.get('http://localhost:3000/profile?_sort=id&_order=desc').then((res) => {
      this.setState({
        profileData: res.data,
      })
    })
  }

  putProfileAPI = () => {
    axios.put(`http://localhost:3000/profile/${this.state.profileForm.id}`, this.state.profileForm)
      .then(res => {
        window.alert('berhasil update');
        this.getProfileAPI()
        this.setState({
          profileForm: {
            id: 1,
            name: "",
            desc: "",
          },
          isUpdate: false,
        });
      })
  }

  getInputForm = (event) => {
    let inputValue = this.state.profileForm;
    let timestamp = new Date().getTime()

    if(!this.state.isUpdate) {
      inputValue["id"] = timestamp;  
    }
 
    inputValue[event.target.name] = event.target.value;
    
    this.setState({
      profileForm: inputValue,
    })
  }

  sendInputForm = () => {
    axios.post('http://localhost:3000/profile', this.state.profileForm)
      .then(() => {
        alert('berhasil menambahkan data');
        this.getProfileAPI();
        this.setState({
          profileForm: {
            id: 1,
            name: "",
            desc: "",
          }          
        })
      }, (err) => {
        window.alert('error:', err);
      })
  }

  submitBtn = () => {
    if(this.state.isUpdate) {
      this.putProfileAPI();
    } else {
      this.sendInputForm();
    }    
  }

  removeBtn = (val) => {
    const confirmDialog = window.confirm('konfirmasi')

    if (confirmDialog === true) {
      axios.delete(`http://localhost:3000/profile/${val}`)
        .then(() => this.getProfileAPI())
    }
  }

  updateBtn = (val) => {  
    this.setState({
      profileForm: val,
      isUpdate: true,
    })    
  }

  componentDidMount() {
    this.getProfileAPI()
  }

  render() {
    return (
      <Fragment>
        <h1 className="heading">Tambah Data</h1>
        <div className="form-container">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="masukkan nama"
            onChange={this.getInputForm}
            value={this.state.profileForm.name}
          />

          <label htmlFor="desc">Deskripsi</label>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            placeholder="masukkan deskripsi"
            onChange={this.getInputForm}
            value={this.state.profileForm.desc}
          ></textarea>

          <button className="submit-btn" onClick={this.submitBtn}>
            Tambah
          </button>
        </div>
        <h1 className="heading">My Profiles</h1>
        <div className="container">
          {this.state.profileData.map((profileData) => {
            return (
              <ProfileCard
                key={profileData.id}
                data={profileData}
                remove={this.removeBtn}
                update={this.updateBtn}
              />
            )
          })}
        </div>
      </Fragment>
    )
  }
}

export default Home
