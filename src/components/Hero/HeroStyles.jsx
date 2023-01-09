import styled from "styled-components";

export const HeroSection = styled.div`
    display: flex;
    justify-content: space-between;
`

export const HeroLeft = styled.div`
    padding: 2rem;
    padding-top: 1.5rem;
    flex:3;
    display: flex;
    gap:2rem;
    flex-direction: column;
`

export const HeroRight = styled.div`
position:relative;
background-color: pink;
flex:1
`

export const BestAd = styled.div`
    background-color: #363d43;
    margin-top: 4rem;
    border-radius: 4rem;
    padding: 20px 14px;
    width: fit-content;
    text-transform: uppercase;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`

export const BestAdDiv = styled.div`
    position: absolute;
    background-color: var(--orange);
    width: 5.4rem;
    height:  80%;
    left: 8px;
    border-radius: 3rem;
    z-index: 1;
`

export const BestAdSpan = styled.span`
    z-index: 2;
`

export const HeroText = styled.div`
display:flex;
flex-direction: column;
gap: 1.5rem;
text-transform: uppercase;
font-size: 4.5rem;
font-weight: bold;
color: white;
text-overflow: inherit;
`

export const ThirdDiv = styled.div`
font-size: 1rem;
font-weight: 200;
text-transform: none;
letter-spacing: 1px;
width: 80%
`

export const Figures = styled.div`
display: flex;
gap: 2rem;
`

export const FiguresDiv = styled.div`
display: flex;
flex-direction: column;
`

export const FiguresSpan1 = styled.span`
color: white;
font-size: 2rem;
`

export const FiguresSpan2 = styled.span`
color: var(--gray);
text-transform: uppercase;
`

export const Buttons = styled.div`
display:flex;
gap:1rem;
font-weight:normal;
`

export const Button1 = styled.button`
color:white;
background-color: var(--orange);
width: 8rem;
`

export const Button2 = styled.button`
color:white;
background-color: transparent;
width: 8rem;
border: 2px solid var(--orange)
`

export const HeartRateDiv = styled.div`
display:flex;
flex-direction: column;
gap:1rem;
background-color: var(--darkGrey);
width: fit-content;
padding: 1rem;
align-items: start;
border-radius: 5px;
position: absolute;
right: 4rem;
top: 7rem;
`
export const HRSpan1 = styled.span`
color: var(--gray);
`

export const HRSpan2 = styled.span`
color:white;
font-size: 1.5rem;
`

export const HeroImg = styled.img`
position: absolute;
top:10rem;
right: 8rem;
width: 23rem;
`

export const HeroImgBack = styled.img`
position:absolute;
top: 4rem;
right: 20rem;
z-index: -1;
width: 15rem;
`

export const HRBtn = styled.button`
position: absolute;
right: 3rem;
top: 2rem;
color: black
`

export const Calory = styled.div`
display: flex;
gap: 2rem;
background-color: var(--caloryCard);
padding: 1rem;
border-radius: 5px;
width: fit-content;
position: absolute;
top: 32rem;
right: 28rem;
`

export const CaloriesImg = styled.img`
width:3rem;
`

export const CaloriesDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
`

export const CaloriesSpan1 = styled.span`
color: var(--gray)
`

export const CaloriesSpan2 = styled.span`
color:white;
font-size: 1.5rem
`