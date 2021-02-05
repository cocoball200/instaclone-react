import React, { Component } from 'react';
import './Recommendation.scss';

class Recommendation extends Component {
  constructor() {
    super()
    this.state = {
      followerList: [],
      isFollowing: false,
    }

  }


  componentDidMount() {
    fetch('/data/followerData.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          followerList: data,
        });
      });
  }

  handleFollowing = () => {
    console.log("is working")
    this.setState({ isFollowing: !this.state.isFollowing })
  }
  render() {
    const { mainData } = this.props;
    const { followerList, isFollowing } = this.state;
    return (
      <aside className="recommendation">
        <div className="main_right_container">
          <div className="recomandation_profile">
            <img className="round_image"
              src={mainData.mainImage}
              alt="profile" />
            <div className="own_profile_container">
              <p>{mainData.mainId}</p>
              <p>{mainData.mainContent}</p>
            </div>
            <div>전환</div>
          </div>
          <div className="recomandation_list">
            <div className="recomandation_list_text">
              <p>회원님을 위한 추천</p>
              <p>모두 보기</p>
            </div>
            <div className="recommendation_cotainer">
              {followerList.map((follower) => {
                return (
                  <div key={follower.id} className="recomandation_individual">
                    <img className="round_image" src={follower.image} alt="recomandation" />
                    <div className="user_container">
                      <span className="user_id">{follower.nickname}</span>
                      <span className="user_follow_status">{follower.content}</span>
                    </div>
                    <div className="follow_text" onClick={() => this.handleFollowing(follower.id)} id={isFollowing ? "pink" : "blue"}>{isFollowing ? "Follow" : "Unfollow"}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default Recommendation;