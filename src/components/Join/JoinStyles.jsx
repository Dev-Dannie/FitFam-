import styled from "styled-components";

export const JoinSection = styled.div`
display:flex;
padding:0 2rem;
gap: 10rem;

@media screen and (max-width: 768px){
   flex-direction: column;
   gap: 1rem;
}
`

export const LeftJ = styled.div`
color:white;
font-size: 3rem;
font-weight:bold;
text-transform:uppercase;
position: relative;

@media screen and (max-width: 768px){
   font-size: x-large;
   flex-direction: column;
}
`

export const LeftJHR = styled.hr`
position:absolute;
width:20rem;
border: 2px solid var(--orange);
border-radius: 20%;
margin: -10px 0;
`

export const LeftJDiv = styled.div`
display:flex;
gap:1rem;
`

export const RightJ = styled.div`
display:flex;
justify-content:center;
align-items:flex-end;

@media screen and (max-width: 768px){
   padding: 2rem;
}
`

export const EmailContainer = styled.form`
display:flex;
gap:3rem;
background-color: gray;
padding: 1rem 2rem;
`

export const EmailInput = styled.input`
background-color:transparent;
border:none;
outline:none;
color:var(--lightgrayz)
`

export const JBtn = styled.button`
background-color: var(--orange);
color:white;
`

export const Lefiv = styled.div``

export const LeftJv = styled.div``