import React from 'react'
import { Category, CategoryImg, CategorySpan1, CategorySpan2, JoinNow, JoinNowImg, ProgramsCategories, ProgramsHeader, ProgramsSection } from './ProgramsStyles';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';


const Programs = () => {
  return (
    <ProgramsSection>
        <ProgramsHeader>
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </ProgramsHeader>

        <ProgramsCategories>
            {programsData.map((program) => (
                <Category>
                    <CategoryImg>{program.image} </CategoryImg>
                    <CategorySpan1>{program.heading}</CategorySpan1>
                    <CategorySpan2>{program.details}</CategorySpan2>
                    <JoinNow>
                        <span>Join Now</span> <JoinNowImg src={RightArrow} alt= '' />
                    </JoinNow>
                </Category>
            ))}
        </ProgramsCategories>
    </ProgramsSection>
  )
}

export default Programs
