import styled from "styled-components";

export const HeaderSection = styled.div`
display: flex;
justify-content: space-between;
`

export const HeaderImg = styled.img`
width: 10rem;
height: 3rem;
` 

export const List = styled.ul`
 list-style:none;
 display: flex;
 gap: 2rem;
 color: #fff;
`

export const ListItem = styled.li`
&:hover {
    cursor:pointer;
    color: var(--orange);
}
`