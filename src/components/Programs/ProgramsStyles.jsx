import styled from "styled-components";


export const ProgramsSection = styled.div`
display:flex;
flex-direction: column;
gap: 2rem;
padding: 0 2rem;
`
export const ProgramsHeader = styled.div`
display:flex;
gap:5rem;
font-weight:bold;
font-size: 3rem;
justify-content: center;
color: white;
text-transform: uppercase;
font-style: italic;

@media screen and (max-width: 768px){
   flex-direction: column;
   gap: 1rem;
   font-size: x-large;
   align-items: center;
   justify-content: center;
   margin-top: 2rem;
}
`

export const ProgramsCategories = styled.div`
display:flex;
gap:1rem;

@media screen and (max-width: 768px){
   flex-direction: column;
}
`

export const Category = styled.div`
display:flex;
flex-direction:column;
background-color: var(--darkGrey);
border-radius: 5px;
padding:2rem;
gap:1rem;
color:white;
justify-content: space-between;

&:hover{
    background: var(--planCard);
    cursor:pointer
}
`

export const CategoryImg = styled.span`
width:2rem;
height:2rem;
fill:white
`

export const CategorySpan1 = styled.span`
font-size:1rem;
font-weight:bold;
`

export const CategorySpan2 = styled.span`
font-size:0.9rem;
line-height:25px;
`

export const JoinNow = styled.div`
dipaly:flex;
align-items:center;
gap:2rem
`

export const JoinNowImg = styled.img`
width: 1rem;
`