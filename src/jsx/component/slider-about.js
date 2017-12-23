import React from 'react';
import Slider from 'react-slick';

export class SliderAbout extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      lazyload: true,
      fade: true,
      swipe: false
    };
    return (
      <div className="sliderMe">
        <Slider {...settings}>
          <div><img src="./assets/images/tyo-7.jpg"/></div>
          <div><img src="./assets/images/tyo-9.jpg"/></div>
          <div><img src="./assets/images/tyo-10.jpg"/></div>
          <div><img src="./assets/images/tyo-12.jpg"/></div>
          <div><img src="./assets/images/tyo-13.jpg"/></div>
        </Slider>
      </div>
    );
  }
}