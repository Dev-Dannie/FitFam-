import React from 'react';
import Header from '../Header/Header';
import Heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import { HeroSection, HeroLeft, HeroRight, BestAd, BestAdDiv,
   BestAdSpan, HeroText, ThirdDiv, FiguresDiv, 
   Figures, FiguresSpan1, FiguresSpan2, Buttons, 
   Button1, Button2, HeartRateDiv, HRBtn, HRSpan1, 
   HRSpan2, HeroImg, HeroImgBack, CaloriesImg, CaloriesDiv, CaloriesSpan1, CaloriesSpan2, Calory} from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
        <HeroLeft>
            <Header />
            <BestAd>
              <BestAdDiv></BestAdDiv>
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
              <span>
                We will help you to shape and build your ideal body goals.
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

          <HeartRateDiv>
            <img src={Heart} alt='' />
            <HRSpan1>Heart Rate</HRSpan1>
            <HRSpan2>120 bpm</HRSpan2>
          </HeartRateDiv>

          <HeroImg src={hero_image} alt= ''/>
          <HeroImgBack src={hero_image_back}/>

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
