import React, { Component } from 'react';
import Slider from "react-slick";

import { fetchSlides } from '../actions/actions_slider';

class SimpleSlider extends Component {
  componentDidMount () {
    this.props.dispatch(fetchSlides());
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'progressive'
    };

    return (
      <div>
        <h2>Unsplash Me</h2>
        <Slider {...settings}>
          {
            this.props.slides.map(slide => {
              return (
                <img alt="" key={ slide.id } src={ slide.urls.regular } width="80%" />
              );
            })
          }
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;