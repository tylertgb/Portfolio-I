import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>brightgobka@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+233 24-282-6513</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Tamale, Northern Region, Ghana</p>
                </div>
            </div>
        </div>
        <form action="submit" className="contact-right">
            <input type="text" placeholder='Name' name='name' />
            <input type="email" placeholder='Email' name='email' />
            <textarea name="message" id="message" row="8" placeholder='Message'></textarea>
            <button type="submit" className="contact-submit">Send message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact