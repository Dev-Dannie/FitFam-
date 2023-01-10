import React from 'react';
import { FooterC, FooterHR, FooterSection, SocialLinks, SocialsImg } from './FooterStyles';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';


const Footer = () => {
  return (
    <FooterSection>
        <FooterHR />
        <FooterC>
            <SocialLinks>
                <SocialsImg src={Github} alt=''/>
                <SocialsImg src={Instagram} alt=''/>
                <SocialsImg src={LinkedIn} alt=''/>
            </SocialLinks>
        </FooterC>
    </FooterSection>
  )
}

export default Footer
