import React from 'react'
import { Category, CategoryImg, CategorySpan1, CategorySpan2, JoinNow, JoinNowImg,  ProgramsSection } from './ProgramsStyles';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
import './Programs.css';
import {motion} from 'framer-motion';
import { variants } from '../variants/variants';

const Programs = () => {
  return (
    <ProgramsSection id='programs'>
        <motion.div 
        className='programs-header'
        variants={variants.fadeDown}
        initial= 'hidden'
        whileInView='visible'
        >
            <span className='stroke-text'>Explore Our</span>
            <span style={{color: 'var(--orange)'}}>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </motion.div>

        <motion.div 
        className='programs-category'
        variants={variants.fadeUpDelay}
        initial= 'hidden'
        whileInView='visible'>
            {programsData.map((program) => (
                <Category className='category'>
                    <CategoryImg>{program.image} </CategoryImg>
                    <CategorySpan1>{program.heading}</CategorySpan1>
                    <CategorySpan2>{program.details}</CategorySpan2>
                    <JoinNow>
                        <span>Join Now</span> <JoinNowImg src={RightArrow} alt= '' />
                    </JoinNow>
                </Category>
            ))}
        </motion.div>
    </ProgramsSection>
  )
}

export default Programs
