import React, {useRef} from 'react'
import { EmailContainer, EmailInput, JBtn, JoinSection, LeftJ, LeftJHR, RightJ } from './JoinStyles'
import './Join.css';
import emailjs from '@emailjs/browser';
import { motion} from 'framer-motion';
import { variants } from '../variants/variants';

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_kopt4gi', 'template_f02avw9', form.current, '5o7z6Xub7iXNMkTcV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  

  return (
    <JoinSection id='join'>
        <motion.div className='left-j'
         variants={variants.fadeInLeft}
         initial= 'hidden'
         whileInView='visible'
        >
            <LeftJHR />
            <div>
                <span className="stroke-text"> READY TO</span>
                <span style={{color: 'var(--orange)'}}> LEVEL UP </span>
            </div>

            <div >
                <span style={{color: 'var(--orange)'}}>YOUR BODY</span>
                <span style={{color: 'var(--orange)'}}> WITH US?</span>
            </div>
        </motion.div>

        <motion.div className='right-j'
         variants={variants.fadeInRight}
         initial= 'hidden'
         whileInView='visible'>
            <EmailContainer ref={form} onSubmit={sendEmail}>
                <EmailInput type='email' name='user_email' 
                placeholder='Enter your username'/>
                <JBtn className='btn'>Join Now</JBtn>
            </EmailContainer>
        </motion.div>
    </JoinSection>
  )
}

export default Join
