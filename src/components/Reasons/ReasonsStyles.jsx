import styled from "styled-components";

export const ReasonsSection = styled.div`
display:flex;
padding: 0 2rem;
grid-template: 2rem;

@media screen and (max-width: 768px){
   flex-direction: column;
}
`

export const LeftReasons = styled.div`
display:grid;
flex 1 1;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
grid-auto-rows: 1fr;

@media screen and (max-width: 768px){
   grid-auto-rows: auto;
   overflow: hidden;
}
`
export const LeftReasonsImg1 = styled.img`

    width:12rem;
    height:28rem;
    grid-row: 1/3;

    @media screen and (max-width: 768px){
        width: 7rem;
        height: 17rem;
    }
`
export const LeftReasonsImg2 = styled.img`
    grid-column: 2/4;
    width:auto;
    height:16rem;

    @media screen and (max-width: 768px){
        width:15rem;
        height: 10rem;
    }
`
export const LeftReasonsImg3 = styled.img`
    grid-column:2/3;
    width:14rem;
    grid-row:2;


    @media screen and (max-width: 768px){
        width: 7rem;
        height: 6rem;
    }
`
export const LeftReasonsImg4 = styled.img`
    grid-column:3/4;
    grid-row:2;
    width:10rem;
    height:11.2rem;

    @media screen and (max-width: 768px){
        width: 7rem;
        height: 6rem;
    }
`

export const RightReasons = styled.div`
display: flex;
flex-direction:column;
gap:1rem;
text-transform:uppercase;
flex: 1 1;
`

export const RRSpan = styled.span`
font-weight: bold;
color:var(--orange)
`
export const RRDiv = styled.div`
color:white;
font-size:3rem;
font-weight:bold;

@media screen and (max-width: 768px){
   font-size: 2.3rem;
}
`

export const RRDetails = styled.div`
display:flex;
flex-direction:column;
gap:1rem;
`

export const DetailsDiv = styled.div`
display:flex;
font-size:1rem;
gap:1rem;
`

export const DetailsImg = styled.img`
width:2rem;
height:2rem;
`

export const PartnersDiv = styled.div`
display:flex;
gap:1rem;
`

export const PartnersImg = styled.img`
width:2.5rem
`