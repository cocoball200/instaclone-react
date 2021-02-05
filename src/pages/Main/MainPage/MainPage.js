import React, { Component } from 'react';
import Feed from './Feed/Feed';
import Recommendation from './Recommendation/Recommendation';

import './MainPage.scss';
class MainPage extends Component {
  state = {
    mainData: [],
  }

  componentDidMount() {
    fetch('/data/mainData.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          mainData: data
        })
      })
  }

  render() {
    const { mainData } = this.state
    return (
      <div className="main_container">
        <Feed mainData={mainData} />
        <Recommendation mainData={mainData} />
      </div>
    );
  }
}

export default MainPage;