import React, { useState } from 'react'
import { HeaderSection, HeaderImg, ListItem, List,} from './HeaderStyles'
import headerlogo from '../../assets/headerlogo.png'
import Bars from '../../assets/bars.png';
import {Link} from 'react-scroll';

const Header = () => {

  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <HeaderSection>
        <HeaderImg src={headerlogo}/>
        {(menuOpened === false && mobile === true) ? 
        <div
        style={{
              padding: '0.5rem',
              borderRadius: '5px',
              backgroundColor: 'var(--darkGrey)',
          }}

          onClick = {() => setMenuOpened(true)}
        >
        <img src={Bars} alt="" 
        style={{width:'1.5rem', height:'1.5rem',}} /></div> :

        <List>
            <ListItem><Link to='home'
            activeClass='active'
             onClick={() => setMenuOpened(false)}
             spy={true}
              smooth={true}
             >
    
              Home</Link></ListItem>
            <ListItem ><Link to='programs' onClick={() => setMenuOpened(false)}
            spy={true}
            smooth={true}
            >Programs</Link></ListItem>
            <ListItem ><Link to='reasons' onClick={() => setMenuOpened(false)}
            spy={true}
            smooth={true}
            >Why Us</Link></ListItem>
            <ListItem ><Link to='plans' onClick={() => setMenuOpened(false)}
             spy={true}
             smooth={true}
            >Plans</Link></ListItem>
            <ListItem ><Link to='testimonials' onClick={() => setMenuOpened(false)}
             spy={true}
             smooth={true}
            >Testimonials</Link></ListItem>
        </List>
      }
        
    </HeaderSection>
  )
}

export default Header
