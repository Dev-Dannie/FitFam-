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

const Reasons = () => {
  return (
    <ReasonsSection>
        <LeftReasons>
            <LeftReasonsImg1 src={image1} alt=''/>        
            <LeftReasonsImg2 src={image2} alt=''/>
            <LeftReasonsImg3 src={image3} alt=''/>
            <LeftReasonsImg4 src={image4} alt=''/>
        </LeftReasons>

        <RightReasons>
            <RRSpan>some reasons</RRSpan>

            <RRDiv className="">
                <span className='stroke-text'>why</span>
                <span> choose us?</span>
            </RRDiv>

            <RRDetails>
                <DetailsDiv className="">
                    <DetailsImg src={tick} alt="" />
                    <span>OVER 150+ EXPERT COACHES</span>
                </DetailsDiv>
                <DetailsDiv className="">
                    <DetailsImg src={tick} alt="" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </DetailsDiv>
                <DetailsDiv className="">
                    <DetailsImg src={tick} alt="" />
                    <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
                </DetailsDiv>
                <DetailsDiv className="">
                    <DetailsImg src={tick} alt="" />
                    <span>RELIABLE PARTNERS</span>
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
        </RightReasons>
    </ReasonsSection>
  )
}

export default Reasons
