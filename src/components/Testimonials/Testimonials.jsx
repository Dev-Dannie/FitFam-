import React, { useState } from 'react';
import { ArrowImg, Arrows, LeftT, RightT, TestimonialsSection } from './TestimonialsStyles';
import './Testimonials.css';
import {testimonialsData} from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import {AnimatePresence, motion} from 'framer-motion';
import { variants } from '../variants/variants';



const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    const transition = {type: 'spring', duration: 3};
  
    return (
    <TestimonialsSection id='testimonials'>
        <motion.div 
        variants={variants.fadeInLeft}
        initial= 'hidden'
        whileInView='visible'
        className='left-t'>
            <span>Testimonials</span>
            <span className='stroke-text'>What clients</span>
            <span style={{color: 'var(--orange)'}}>say about us</span>

            <motion.span
            key={selected}
            initial= {{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            exit= {{opacity: 0, x: 100}}
            transition ={transition}
            className='review'
            >
                {testimonialsData[selected].review}
            </motion.span>

            <span>
                <span style={{color: 'var(--orange)'}}>
                    {testimonialsData[selected].name}
                </span>{' '}
                 <span className='status'>
                   - {testimonialsData[selected].status}
                    </span>
            </span>
        </motion.div>

        <RightT>
            <motion.div 
            initial= {{opacity: 0, x: -100}}
            whileInView = {{opacity: 1, x: 0}}
            transition= {{...transition, duration: 2}}
            className='right-t-border'></motion.div >

            <motion.div 
            initial= {{opacity: 0, x: 100}}
            whileInView = {{opacity: 1, x: 0}}
            transition= {{...transition, duration: 2}}
            className='right-t-gradient'></motion.div>

           <motion.img 
            key={selected}
            initial= {{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit= {{opacity: 0, x: -100}}
            transition ={transition}
            className='right-img'
            src={testimonialsData[selected].image} alt=''/>


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
