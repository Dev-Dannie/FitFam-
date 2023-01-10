import styled from "styled-components";

export const FooterSection = styled.div`
position: relative;
`

export const FooterHR = styled.hr`
border: 1px solid var(--lightgray)
`

export const FooterC = styled.div`
padding: 1rem 2rem;
display: flex;
flex-direction;
gap:4rem;
align-items: center;
justify-content: center;
height: 10rem;
`

export const SocialLinks = styled.div`
display:flex;
gap:4rem;
`

export const SocialsImg = styled.img`
width: 2rem;
height: 2rem;
cursor: pointer;
`

export const BlurDiv1 = styled.div`
bottom: 0;
right: 15%;
width: 26rem;
height: 12rem;
filter: blur(200px);
background: red;
`
export const BlurDiv2 = styled.div`
bottom: 0;
left: 15%;
width: 26rem;
height: 12rem;
filter: blur(200px);
background: rgb(255, 115, 0);
`

