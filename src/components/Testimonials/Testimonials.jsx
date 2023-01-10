import React, { useState } from 'react';
import { ArrowImg, Arrows, LeftT, RightT, RightTBorder, RightTGradient, RightTImg, TestimonialsSection } from './TestimonialsStyles';
import './Testimonials.css';
import {testimonialsData} from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';



const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length
    console.log(tLength)
  return (
    <TestimonialsSection>
        <LeftT className='left-t'>
            <span>Testimonials</span>
            <span className='stroke-text'>What clients</span>
            <span>say about us</span>

            <span>
                {testimonialsData[selected].review}
            </span>

            <span>
                <span style={{color: 'var(--orange)'}}>
                    {testimonialsData[selected].name}
                </span>{' '}
                - {testimonialsData[selected].status}
            </span>
        </LeftT>

        <RightT>
            <RightTBorder></RightTBorder>
            <RightTGradient></RightTGradient>

            <RightTImg src={testimonialsData[selected].image} alt=''/>

            <Arrows>
                <ArrowImg src={leftArrow} alt=''
                onClick={() => {selected === 0 ? 
                setSelected(tLength-1) : setSelected((prev) => prev - 1);
                }}
                />
                
                <ArrowImg src={rightArrow} alt=''
                onClick={() => {selected === tLength - 1 ? 
                setSelected(0) : setSelected((prev) => prev + 1)}}
                />
            </Arrows>
        </RightT>
    </TestimonialsSection>
  )
}

export default Testimonials
