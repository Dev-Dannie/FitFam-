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