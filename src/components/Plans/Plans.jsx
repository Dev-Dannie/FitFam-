import React from 'react';
import {plansData} from '../../data/plansData';
import { Feature, FeatureImg, Features, FeatureSpan, Plan, PlansContainer, PlansSection, } from './PlansStyles';
import { ProgramsHeader} from '../Programs/ProgramsStyles';
import './Plans.css'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
   <PlansContainer>
        <ProgramsHeader>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH US</span>
        </ProgramsHeader>

        {/* plans card */}

        <PlansSection className='plans'>
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
        </PlansSection>
   </PlansContainer>
    )
}

export default Plans
