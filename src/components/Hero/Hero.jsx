import React from 'react';
import Header from '../Header/Header';
import { HeroSection, HeroLeft, HeroRight, BestAd, BestAdDiv,
   BestAdSpan, HeroText, ThirdDiv, FiguresDiv, 
   Figures, FiguresSpan1, FiguresSpan2} from './HeroStyles';

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
        </HeroLeft>
        <HeroRight>HeroRight</HeroRight>
    </HeroSection>
     )
}

export default Hero
