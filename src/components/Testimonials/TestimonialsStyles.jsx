import styled from "styled-components";

export const TestimonialsSection = styled.div`
display:flex;
gap:1rem;
padding: 0 2rem;

@media screen and (max-width: 768px){
   flex-direction: column;
}
`

export const LeftT = styled.div`
display:flex;
flex: 1 1;
gap: 2rem;
flex-direction: column;
text-transform: uppercase;
color: white
`

export const RightT = styled.div`
flex:1;
position: relative;

@media screen and (max-width: 768px){
 display: flex;
 flex-direction:column;
 align-items: center;
 justify-content: center;
 gap: 2rem;  
}
`

export const Arrows = styled.div`
display: flex;
gap:1rem;
position:absolute;
bottom: 1rem;
left: 3rem;

`

export const ArrowImg = styled.img`
width: 1.5rem;
cursor:pointer
`