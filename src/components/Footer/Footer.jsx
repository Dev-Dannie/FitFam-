import React from 'react';
import { BlurDiv1, BlurDiv2, FooterC, FooterHR, FooterSection, SocialLinks, SocialsImg } from './FooterStyles';
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

        <BlurDiv1 className="blur"></BlurDiv1>
        <BlurDiv2 className="blur blurf2"></BlurDiv2>
    </FooterSection>
  )
}

export default Footer
