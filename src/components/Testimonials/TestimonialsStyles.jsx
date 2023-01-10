import styled from "styled-components";

export const TestimonialsSection = styled.div`
display:flex;
gap:1rem;
padding: 0 2rem;
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
position: relative
`

export const RightTImg = styled.img`
position: absolute;
width:17rem;
height:20rem;
object-fit: cover;
right:8rem;
top:2rem
`
export const RightTBorder = styled.div`
position: absolute;
width: 17rem;
height: 20rem;
border: 2px solid orange;
right: 9rem;
top: 0.9rem
`

export const RightTGradient = styled.div`
position:absolute;
width:17rem;
height:19rem;
right:7rem;
top:4rem;
background: var(--planCard)
`

export const Arrows = styled.div`
display: flex;
gap:1rem;
position:absolute;
bottom: 1rem;
left: 3rem
`

export const ArrowImg = styled.img`
width: 1.5rem;
cursor:pointer
`