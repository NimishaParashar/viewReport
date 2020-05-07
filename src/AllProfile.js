import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class AllProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ol>
          {this.props.profiles.map((profile) => {
            return (
              <Link to={`/profile/${profile.id}`}>
                <li>{profile.name}</li>
              </Link>
            );
          })}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles,
  };
};

export default connect(mapStateToProps)(AllProfile);
