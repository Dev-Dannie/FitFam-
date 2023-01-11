import React, { useState } from 'react'
import { HeaderSection, HeaderImg, ListItem, List } from './HeaderStyles'
import headerlogo from '../../assets/headerlogo.png'
import Bars from '../../assets/bars.png';

const Header = () => {

  const mobile = window.innerWidth<=768 ? true : false
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <HeaderSection>
        <HeaderImg src={headerlogo}/>
        {(menuOpened === false && mobile === true) ? 
        <div
        style={{
              padding: '0.5rem',
              borderRadius: '5px',
          }}

          onClick = {() => setMenuOpened(true)}
        ><img src={Bars} alt="" 
        style={{width:'1.5rem', height:'1.5rem',}} /></div> :

        <List>
            <ListItem onClick={() => setMenuOpened(false)}>Home</ListItem>
            <ListItem onClick={() => setMenuOpened(false)}>Programs</ListItem>
            <ListItem onClick={() => setMenuOpened(false)}>About Us</ListItem>
            <ListItem onClick={() => setMenuOpened(false)}>Plans</ListItem>
            <ListItem onClick={() => setMenuOpened(false)}>Testimonials</ListItem>
        </List>
      }
        
    </HeaderSection>
  )
}

export default Header
