import React from 'react';
import Header from '../Header/Header';
import { HeroSection, HeroLeft, HeroRight} from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
        <HeroLeft>
            <Header />
        </HeroLeft>
        <HeroRight>HeroRight</HeroRight>
    </HeroSection>
     )
}

export default Hero
