import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>send us a message <img src= {msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our vontact
                information below. Your feedback,question and seggustion are important to us as we strive 
                to provide exceptional service to our univerdity comunity
            </p>
                <ul>
                    <li> <img src= {mail_icon} alt="" />oligeda16@gmail.com</li>
                    <li><img src= {phone_icon} alt="" /> +251-922121466</li>
                    <li> <img src= {location_icon} alt="" />Teklehaymanot,Lideta, Addis Ababa, Ethiopia </li>
                </ul>
        </div>
        <div className="contact-col">
        <form>
            <label>Your Name</label>
            <input type="text"  name='name' placeholder='Enter your name here' required/>
            <label>Phone number</label>
            <input type="tel"  name='phone' placeholder='Enter your phone number here' required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='enter your message here' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>sending</span>
        </div>
        
    </div>
  )
}

export default Contact