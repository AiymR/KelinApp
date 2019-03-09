import React, { Component } from 'react';
import './Slider.css'
import photo from './berik.jpg'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function PhotoSlider() {
    const images = [
        'https://bit.ly/2HpMD9F',
        'https://bit.ly/2UseUQw',
        ]
    return(
        <div className='photoSlider'>
            <CarouselProvider
                naturalSlideWidth={300}
                naturalSlideHeight={425}
                totalSlides={3}
            >
            <Slider>
                <Slide index={0}>
                    <img src={photo} alt="" className='photoSlider'/>
                </Slide>
                <Slide index={1}>
                    <img src={images[0]} alt="" className='photoSlider'/>
                </Slide>
                <Slide index={2}>
                    <img src={images[1]} alt="" className='photoSlider' />
                </Slide>
            </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        </div>
        )
}

export default PhotoSlider
