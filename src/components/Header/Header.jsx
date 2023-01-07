import React from 'react'
import { HeaderSection, HeaderImg, ListItem, List } from './HeaderStyles'
import headerlogo from '../../assets/headerlogo.png'

const Header = () => {
  return (
    <HeaderSection>
        <HeaderImg src={headerlogo}/>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Programs</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Plans</ListItem>
            <ListItem>Testimonials</ListItem>
        </List>
    </HeaderSection>
  )
}

export default Header
