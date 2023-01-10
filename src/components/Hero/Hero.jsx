import React from 'react';
import Header from '../Header/Header';
import Heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import {motion} from 'framer-motion';
import './Hero.css';
import { HeroSection, HeroLeft, HeroRight, BestAd,
   BestAdSpan, HeroText, ThirdDiv, FiguresDiv, 
   Figures, FiguresSpan1, FiguresSpan2, Buttons, 
   Button1, Button2, HRBtn, HRSpan1, 
   HRSpan2, HeroImg,  CaloriesImg, CaloriesDiv, CaloriesSpan1, CaloriesSpan2, Calory, BlurEffect} from './HeroStyles';

const Hero = () => {

  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth<=768 ? true : false;


  return (
    <HeroSection>
      <BlurEffect className='blur'></BlurEffect>

        <HeroLeft>
            <Header />
            <BestAd>
              <motion.div
              initial= {{left: mobile ? '165px' : '238px'}}
              whileInView={{left: '8px'}}
              transition = {{...transition, type: 'tween'}}

              className= 'best-ad-div'
              ></motion.div>
              <BestAdSpan>The best fitness gym in town</BestAdSpan>
            </BestAd>

            <HeroText>
              <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
              </div>

              <div>
                <span>Ideal body</span>
              </div>

            <ThirdDiv>
              <span className='third-div'>
                We will help you to shape/build your ideal body goals 
                and live your life to the fullest.
              </span>
            </ThirdDiv>
            </HeroText>

            <Figures>
              <FiguresDiv>
                <FiguresSpan1>86+</FiguresSpan1>
                <FiguresSpan2>expert coaches</FiguresSpan2>
              </FiguresDiv>

              <FiguresDiv>
                <FiguresSpan1>630+</FiguresSpan1>
                <FiguresSpan2>members joined</FiguresSpan2>
              </FiguresDiv>

              <FiguresDiv>
                <FiguresSpan1>50+</FiguresSpan1>
                <FiguresSpan2>fitness programs</FiguresSpan2>
              </FiguresDiv>
            </Figures>

            <Buttons>
              <Button1 className="btn">Get Started</Button1>
              <Button2 className="btn">Learn More</Button2>
            </Buttons>
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

          <HeroImg src={hero_image} alt= ''/>
          <motion.img 
          initial= {{right: '10rem'}}
          whileInView={{right:'20rem'}}
          transition={transition}
          src={hero_image_back} className='hero-img-back'/>

          <Calory>
            <CaloriesImg src={calories} alt='' />
            <CaloriesDiv>
              <CaloriesSpan1>Calories Burned</CaloriesSpan1>
              <CaloriesSpan2>180 kcal</CaloriesSpan2>
            </CaloriesDiv>
          </Calory>
        </HeroRight>
    </HeroSection>
     )
}

export default Hero
