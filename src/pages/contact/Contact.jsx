import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io'





import './contact.css';

const Contact = () => {
  return (
    <>
      
      <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
      amet fuga cumque sapiente inventore corrupti harum nostrum iure non modi!
      </Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            
          <a href="mailto:aravintharavinth7746@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="#" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="#" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>
        </div>

        <div className="form-main">
  <div className="main-wrapper">
    <h2 className="form-head">Contact Form</h2>
    <form className="form-wrapper" action="http://127.0.0.1:8000/api/contact/" method="POST">
      <div className="form-card">
        <input
          className="form-input"
          type="text"
          name="fullname"
          required="required"
        />
        <label className="form-label" htmlFor="full_name">Full Name</label>
      </div>

      <div className="form-card">
        <input
          className="form-input"
          type="email"
          name="email"
          required="required"
        />
        <label className="form-label" htmlFor="email">Email</label>
      </div>

      <div className="form-card">
        <input
          className="form-input"
          type="number"
          name="phonenumber"
          required="required"
        />
        <label className="form-label" htmlFor="phone_number">Phone number</label>
      </div>

      <div className="form-card">
        <textarea
          className="form-textarea"
          maxLength="420"
          rows="3"
          name="message"
          required="required"
        ></textarea>
        <label className="form-textarea-label" htmlFor="phone_number">Message</label>
      </div>

      <div className="btn-wrap">
        <button className='btn lg' type="submit">Submit</button>
      </div>
    </form>
  </div>
</div>

  
      </section>
     
    </>
  )
}

export default Contact
