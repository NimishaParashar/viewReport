import React from "react";
import { connect } from "react-redux";

function ViewProfile(props) {
  return (
    <div>
      {Object.keys(props.profile).length ? (
        <div>
          <img src={props.profile.image} alt="..." className="image" />
          <h1>{props.profile.name} 's Profile</h1>
          <h2>category:{props.profile.category}</h2>
          <h2> categoryid:{props.profile.categoryid} </h2>
          <h2>address:{props.profile.address}</h2>
          <h2> description:{props.profile.description}</h2>
          <h2>contact:{props.profile.contact}</h2>
          <h2>empcode:{props.profile.empcode}</h2>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  console.log(id);
  return {
    profile: state.profiles.find((profile) => profile.id == id),
  };
};

export default connect(mapStateToProps)(ViewProfile);
