import React from 'react'
import { DetailsDiv, DetailsImg, LeftReasons,  LeftReasonsImg1,  LeftReasonsImg2,  LeftReasonsImg3,  LeftReasonsImg4,  PartnersDiv,  PartnersImg,  ReasonsSection, RightReasons, RRDetails, RRDiv, RRSpan } from './ReasonsStyles';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';
import './Reasons.css';
import {motion} from 'framer-motion';
import { variants } from '../variants/variants';

const Reasons = () => {
  return (
    <ReasonsSection id='reasons'>
        <motion.div 
        className='left-reasons'
        variants={variants.fadeDown}
        initial= 'hidden'
        whileInView='visible'
        >
            <LeftReasonsImg1 src={image1} alt=''/>        
            <LeftReasonsImg2 src={image2} alt=''/>
            <LeftReasonsImg3 src={image3} alt=''/>
            <LeftReasonsImg4 src={image4} alt=''/>
        </motion.div>

        <motion.div 
        className='right-reasons'
        variants={variants.fadeUp}
        initial= 'hidden'
        whileInView='visible'>
            <RRSpan>some reasons</RRSpan>

            <RRDiv className="">
                <span className='stroke-text'>why</span>
                <span style={{color: 'var(--orange)'}}> choose us?</span>
            </RRDiv>

            <RRDetails>
                <DetailsDiv className="">
                    <DetailsImg src={tick} alt="" />
                    <span className='reason-text'>OVER 150+ EXPERT COACHES</span>
                </DetailsDiv>
                <DetailsDiv className="">
                    <DetailsImg src={tick} alt="" />
                    <span className='reason-text'>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </DetailsDiv>
                <DetailsDiv className="">
                    <DetailsImg src={tick} alt="" />
                    <span className='reason-text'>1 FREE PROGRAM FOR NEW MEMBERS</span>
                </DetailsDiv>
                <DetailsDiv className="">
                    <DetailsImg src={tick} alt="" />
                    <span className='reason-text'>RELIABLE PARTNERS</span>
                </DetailsDiv>
            </RRDetails>

            <span style={{color:'var(--gray)', fontWeight:'normal'}}>
                OUR PARTNERS
            </span>

            <PartnersDiv>
                <PartnersImg src={nb} alt=''/>
                <PartnersImg src={adidas} alt=''/>
                <PartnersImg src={nike} alt=''/>
            </PartnersDiv>
        </motion.div >
    </ReasonsSection>
  )
}

export default Reasons
