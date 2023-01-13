import React from 'react';
import {plansData} from '../../data/plansData';
import { Feature, FeatureImg, Features, FeatureSpan, Plan, PlansContainer, } from './PlansStyles';
// import { ProgramsHeader} from '../Programs/ProgramsStyles';
import './Plans.css';
import {motion} from 'framer-motion';
import { variants } from '../variants/variants';
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
   <PlansContainer id='plans'>
    <div className="blur plans-blur-1"></div>
    <div className="blur plans-blur-2"></div>
        <motion.div className='plans-header'
        variants={variants.fadeDown}
        initial= 'hidden'
        whileInView='visible'
        >
            <span className='stroke-text'>READY TO START</span>
            <span style={{color: 'var(--orange)'}}>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH US</span>
        </motion.div>

        {/* plans card */}

        <motion.div 
        variants={variants.fadeUpDelay}
        initial= 'hidden'
        whileInView='visible'
        className='plans'>
            {plansData.map((plan, i) => (
                <Plan className='plan'>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <Features>
                        {plan.features.map((feature, i) => (
                            <Feature>
                                <FeatureImg src= {whiteTick} alt='' />
                                <FeatureSpan key={i}>{feature}</FeatureSpan>
                            </Feature>
                        ))}
                    </Features>

                    <div className="">
                        <span>See more benefits</span>
                    </div>
                    <button className='btn'>Join Now</button>
                </Plan>
            ))}
        </motion.div>
   </PlansContainer>
    )
}

export default Plans
