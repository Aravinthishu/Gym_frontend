import { Link } from "react-router-dom"
import Logo from '../images/logo(1).png';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo"></Link>
                    <img src={Logo} alt="Footer Logo"/>
                    <p>Lorem ipsum dolor sit amet consectetur,
                        expedita deleniti distinctio, repudiandae eveniet quos voluptate ab.</p>
                        <div className="footer__socials">
                            <a href="#" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                            <a href="#" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                            <a href="#" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                            <a href="#" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                        </div>
                
            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>

            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Comunities</Link>
                <Link to="/s">FAQs</Link>
            </article>

            <article>
                <h4>Get In Touch</h4>
                <Link to="/s">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>

        <div className="footer__copyright">
            <small>2023 ARAVINTH SEDHURAMAN &copy; All Right Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
