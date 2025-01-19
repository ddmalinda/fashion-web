import React from 'react';
import Carousel from 'react-material-ui-carousel'
import SingleSliderItem from '../../components/homeSlider/SingleSliderItem';

export default function CustomerSlider({ items }) {

    return (
        <Carousel indicators={false}>
            {items.map((item, i) => (
                <SingleSliderItem key={i} image={item.image} />
            ))}
        </Carousel>
    )
}



