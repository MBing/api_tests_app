import { connect } from 'react-redux';
import { fetchProfile, saveProfile } from '../actions/actions_profile';

import ProfileComponent from '../components/Profile';

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: () => {
      dispatch(fetchProfile())
    },
    saveProfile: () => {
      dispatch(saveProfile())
    }
  }
};

const Profile = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);

export default Profile;
