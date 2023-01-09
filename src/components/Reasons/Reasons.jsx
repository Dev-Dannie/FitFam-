import React from 'react'
import { LeftReasons, LeftReasonsImg, ReasonsSection, RightReasons } from './ReasonsStyles';
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
            <LeftReasonsImg src={image1} alt=''/>        
            <LeftReasonsImg src={image2} alt=''/>
            <LeftReasonsImg src={image3} alt=''/>
            <LeftReasonsImg src={image4} alt=''/>
        </LeftReasons>

        <RightReasons>
            Right Side
        </RightReasons>
    </ReasonsSection>
  )
}

export default Reasons
