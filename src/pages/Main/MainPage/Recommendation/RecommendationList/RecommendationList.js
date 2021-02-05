import React, { Component } from 'react';

class RecommendationList extends Component {
  render() {
    const { func, isFollowing } = this.props;
    return (
      <div className="follow_text" onClick={func}>{isFollowing ? "Follow" : "Unfollow"}</div>
    );
  }
}

export default RecommendationList;