import axios from "axios";

export const startSetProfile = () => {
  return (dispatch) => {
    axios
      .get(
        "http://dct-cors.herokuapp.com/http://aryu.co.in/tracking/viewreport.php"
      )
      .then(function (response) {
        console.log(response.data);
        const profile = response.data;

        if (profile.hasOwnProperty("Success")) {
          const profiles = profile["Success"];
          //  this.setState({ profiles });
          dispatch(setProfile(profiles));
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
};

export const setProfile = (contents) => {
  return {
    type: "SET_PROFILE",
    payload: contents,
  };
};
