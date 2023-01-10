import React, {useRef} from 'react'
import { EmailContainer, EmailInput, JBtn, JoinSection, LeftJ, LeftJHR, RightJ } from './JoinStyles'
import './Join.css';
import emailjs from '@emailjs/browser';

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
    <JoinSection>
        <LeftJ>
            <LeftJHR />
            <div>
                <span className="stroke-text"> READY TO</span>
                <span> LEVEL UP </span>
            </div>

            <div >
                <span>YOUR BODY</span>
                <span> WITH US?</span>
            </div>
        </LeftJ>

        <RightJ>
            <EmailContainer ref={form} onSubmit={sendEmail}>
                <EmailInput type='email' name='user_email' 
                placeholder='Enter your username'/>
                <JBtn className='btn'>Join Now</JBtn>
            </EmailContainer>
        </RightJ>
    </JoinSection>
  )
}

export default Join
