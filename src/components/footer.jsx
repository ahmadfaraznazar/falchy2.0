import '../styles/footer.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
const footer = () => {
  return (
    <div className="footer-section">
        <div className="parent">
            <div className="brand-tab">
                <div className='brand'>
                <h3 className='logo-text'>FALCHY</h3>
                <p className='tagline'>Where Comfort Meets Excellence</p>
                </div>

                <div className='news-letter'>
                <p className=''>Subscribe to our newsletter</p>
                <input type="text" className='email-input' placeholder="Email" />
                </div>
                
            </div>
            <div className="legal">
             <div>
                <a href='#'>Terms</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Cookie Policy</a>
                <a href='#'>Legal Notice</a>
             </div>   
            </div>
            <div className="div3 link-section top-destination">
                <h5 className='link-heading'>Top Destinations</h5>

                <div className='links'>
                    <a href='#'>Milan</a>
                    <a href='#'>St. Moritz</a>
                    <a href='#'>Bergamo</a>
                    <a href='#'>Malpeensa</a>
                    <a href='#'>Venice</a>
 

                </div>
                
            </div>
            <div className="div4 link-section explore">
            <h5 className='link-heading'>Explore</h5>

                    <div className='links'>
                        <a href='#'>About Us</a>
                        <a href='#'>Our Services</a>
                        <a href='#'>Our Fleet</a>
                        <a href='#'>Contact Us</a>
                        <a href='#'>Fare Calculator</a>


                    </div>    
            </div>
            <div className="div5 link-section trending-rides"> 

            <h5 className='link-heading'>Trending Rides</h5>

                    <div className='links'>
                        <a href='#'>Malpensa - Bergamo</a>
                        <a href='#'>Malpensa - Milan</a>
                        <a href='#'>Malpensa -  Lake Como</a>
                        <a href='#'>Lake Como - St. Moritz</a>
                        <a href='#'>Milan - Lake Como</a>


                    </div>
            </div>
            <div className="div6 link-section get-in-touch">
                
            <h5 className='link-heading'>Get in Touch</h5>

                    <div className='links'>
                        <p ><span><FaMapMarkerAlt /></span> Cassano Magnago (VA) VIA Foro San Martino 22 CAP 21012</p>
                        <p ><span><FaEnvelope /></span>info@falchy.com</p>
                        <p ><span><FaPhone /></span>(+39) 375 911 9255</p>
                        <p ><span><FaClock /></span>Available 24/7</p>
                      


                    </div>
                
            </div>
            <div className="social"> 
                
            <div className="social-container">
                <a href="#" className="social-link" aria-label="Facebook">
                    <FaFacebookF />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                    <FaTwitter />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                    <FaLinkedinIn />
                </a>
                </div>

            </div>
            <div className="copyright">© 2025 FALCHY </div>
        </div>

    </div>
  )
}

export default footer