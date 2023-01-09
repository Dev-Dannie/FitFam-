import styled from "styled-components";

export const ReasonsSection = styled.div`
display:flex;
padding: 0 2rem;
grid-template: 2rem;
`

export const LeftReasons = styled.div`
display:grid;
flex 1 1;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
grid-auto-rows: 1fr;
`
export const LeftReasonsImg = styled.img`
object-fit:cover
`

export const RightReasons = styled.div`
flex: 1 1;
`