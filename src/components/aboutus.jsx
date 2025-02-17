
import '../styles/aboutus.css'
import AboutUsImage from '../assets/About-us-image.png'

function AboutUs() {
  

    return (

      <>
      
        <div className='about-us-grid'>
            <div className='about-us-intro'>
                <div>
                <h1 className='about-us-title'>About Us</h1>
                <p className='about-us-text'>We are a Mobility Services Company based in Italy</p>
                </div>
                <img src={AboutUsImage} alt="Falchy Image"></img>

            </div>
            <div className='about-us-credibility'>

                <div className='about-us-text'>
                    <p>
                    At our exclusive chauffeured car service, we are dedicated to delivering unparalleled luxury and exceptional service to each and every client. Whether you are in need of a sophisticated ride for business, leisure, or special occasions, we offer personalized solutions tailored to your unique preferences
                    </p>
                   
                    <p>
                    Our professional team ensures that every detail is meticulously crafted, from the moment you book your journey to the final destination. With a fleet of exquisite vehicles and a commitment to excellence, we provide an experience that blends comfort, elegance, and convenience. 
                    </p>
                    
                    <p>
                    Trust us to offer a seamless, luxurious travel experience that exceeds your expectations, allowing you to indulge in the highest level of service and sophistication.
                    </p>
                </div>

                <div className='credibilitity-boxes'>
                    <div >
                        <h1>12+</h1>
                        <p>Years of Service</p>
                    </div>
                    <div>
                    <h1>200+</h1>
                    <p>Customer Transfers</p>
                    </div>

                </div>

            </div>

        </div>
        
      </>
    )
  }
  
  export default AboutUs