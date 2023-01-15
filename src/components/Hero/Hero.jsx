import React from 'react';
import Header from '../Header/Header';
import Heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import {motion} from 'framer-motion';
import './Hero.css';
import { variants } from '../variants/variants';
import NumberCounter from 'number-counter';
import { HeroSection, HeroLeft, HeroRight, BestAd,
   BestAdSpan, HeroText, ThirdDiv, FiguresDiv, 
   Figures, FiguresSpan1, FiguresSpan2, Buttons, 
   Button1, Button2, HRBtn, HRSpan1, 
   HRSpan2, HeroImg,  CaloriesImg, CaloriesDiv, CaloriesSpan1, 
   CaloriesSpan2, Calory, BlurEffect} from './HeroStyles';

 
const Hero = () => {

  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth<=768 ? true : false;


  return (
    <HeroSection id='home'>
      <BlurEffect className='blur'></BlurEffect>
      
        <HeroLeft>
            <Header />
            <BestAd>
              <motion.div
              initial= {{left: mobile ? '130px' : '180px'}}
              whileInView={{left: '8px'}}
              transition = {{...transition, type: 'tween'}}

              className= 'best-ad-div'
              ></motion.div>
              <BestAdSpan>The best fitness gym in town</BestAdSpan>
            </BestAd>

            <motion.div 
            variants={variants.fadeUpDelay}
            initial= 'hidden'
            whileInView='visible'
            
            className='hero-text'>
              <div>
                <span className='stroke-text'>Shape </span>
                <span className='your'>Your</span>
              </div>

              <div>
                <span className='body'>Ideal body</span>
              </div>

            <ThirdDiv>
              <span>
                We will help you to shape and build your ideal body goals 
                and live your life to the fullest.
              </span>
            </ThirdDiv>
            </motion.div>

            <motion.div 
              variants={variants.fadeDown}
              initial= 'hidden'
              whileInView='visible'
            className='figures'>
              <FiguresDiv>
                <FiguresSpan1>
                  <NumberCounter className='number' end={96} start={76} delay='4' preFix= '+'/>
                </FiguresSpan1>
                <FiguresSpan2>expert coaches</FiguresSpan2>
              </FiguresDiv>

              <FiguresDiv>
                <FiguresSpan1>
                <NumberCounter className='number' end={876} start={856} delay='4' preFix= '+'/> 
                </FiguresSpan1>
                <FiguresSpan2>members joined</FiguresSpan2>
              </FiguresDiv>

              <FiguresDiv>
                <FiguresSpan1>
                <NumberCounter className='number' end={76} start={56} delay='4' preFix= '+'/>
                </FiguresSpan1>
                <FiguresSpan2>fitness programs</FiguresSpan2>
              </FiguresDiv>
            </motion.div>

            <motion.div className='buttons'
            variants={variants.fadeDown}
            initial= 'hidden'
            whileInView='visible'
            >
              <Button1 className="btn">Get Started</Button1>
              <Button2 className="btn learn">Learn More</Button2>
            </motion.div>
        </HeroLeft>


        <HeroRight>
          <HRBtn className='btn'>Join Now</HRBtn>
          
          <motion.div 
          initial= {{right: '-1rem'}}
          whileInView= {{right: '4rem'}}
          transition = {transition}
          className='heart-rate-div'>
            <img src={Heart} alt='' />
            <HRSpan1>Heart Rate</HRSpan1>
            <HRSpan2>120 bpm</HRSpan2>
          </motion.div>

          <motion.img 
          variants={variants.fadeInRight}
          initial= 'hidden'
          whileInView='visible'
          className='hero-img' src={hero_image} alt= ''/>

          <motion.img 
          initial= {{right: '10rem'}}
          whileInView={{right:'20rem'}}
          transition={transition}
          src={hero_image_back} className='hero-img-back'/>

          <Calory>
            <CaloriesImg src={calories} alt='' />
            <CaloriesDiv>
              <CaloriesSpan1 style={{color: 'var(--darkGrey)'}}>Calories Burned</CaloriesSpan1>
              <CaloriesSpan2>180 kcal</CaloriesSpan2>
            </CaloriesDiv>
          </Calory>
        </HeroRight>
    </HeroSection>
     )
}

export default Hero
