import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  images: string[];
  width?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, width = '100%' }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: width,
    margin: '0 auto',
    textAlign: 'center',
  };

  const imageStyle: React.CSSProperties = {
    display: 'inline-block',
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div style={containerStyle} className='relative top-[100px] '>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index+1}>
            <img src={image} alt={`slide-${index}`} style={imageStyle}  />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
