import { connect } from 'react-redux';

import SimpleSliderComponent from '../components/SimpleSlider';

const mapStateToProps = state => {
  return {
    slides: state.slides
  };
};

const SimpleSlider = connect(
  mapStateToProps
)(SimpleSliderComponent);

export default SimpleSlider;
