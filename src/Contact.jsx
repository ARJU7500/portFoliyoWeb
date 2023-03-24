import React from 'react';
import styled from 'styled-components';
const Contact = () =>
{
  const Wrapper = styled.section`
  padding:6rem 0 5rem 0;
  
  .container{
    margin-top:6rem;
    text-align:center;
    .contact-form{
      max-width:50rem;
      margin:auto;

      .form_input{
        display:flex;
        flex-direction:column;
        gap:3rem;

        input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
}
    }
  }
  `;
  return(
    <Wrapper>
  <h2 className='common-heading'>Our Contact</h2>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13766.162042666876!2d79.30993178703345!3d30.392403009539883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909d446cba5503d%3A0x3f651e48498fc8cd!2z4KSq4KWN4KSw4KWM4KSm4KWN4KSv4KWL4KSX4KS_4KSV4KWAIOCkuOCkguCkuOCljeCkpeCkvuCkqCwg4KSX4KWL4KSq4KWH4KS24KWN4KS14KSwIOCkleClgA!5e0!3m2!1shi!2sin!4v1679639234166!5m2!1shi!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div className='container'>
    <div className='contact-form'>
      <form action='https://formspree.io/f/mayzdlyk' method='POST' className='form_input'>
          <input type='text' name='uname' placeholder='Enter user name' autoComplete='off' required/>
          <input type='email' name='email' placeholder='Enter user emailid' autoComplete='off' required/>
          <textarea name='mesg' cols='30' rows='6' autoComplete='off' required></textarea>
          <input type='submit' value='send' />
      </form>
    </div>
    </div>
    </Wrapper>
  )
}

export default Contact;