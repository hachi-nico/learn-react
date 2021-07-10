import React, { Component } from "react";
import ProfileCard from "../component/ProfileCard";

class Home extends Component {
  render() {
    return (
      <div>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    );
  }
}

export default Home;
