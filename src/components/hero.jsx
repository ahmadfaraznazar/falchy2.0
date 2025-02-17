import '../styles/hero.css'
import HeroImage from '../assets/Hero-Car-Updated.png'
import BookingIcon from '../assets/booking-icon.svg'
import UpsideRightArrow from '../assets/Upside-Right-Arrow.png'

const hero = () => {
  return (
    <div className='hero-section'>

        <div className='vector-text'>
             <h1>VIP</h1>
        </div>



        <div className='hero-all-content'>
        <div className='hero-content'>

            <div className='heading'>
                    <h1 className='hero-heading'>
                    Limousine  
                    <span className='vip'> VIP </span> 
                    Transfers
                    </h1>
            </div>

            <div className='paragraph-div'>
            <div className='paragraph'>
                <p className='hero-paragraph'>
                We provide reliable and convenient 24/7 airport taxi services in Italy. Our fleet of modern vehicles and experienced drivers will ensure you have a safe, comfortable, and stress-free journey to your destination. 
                </p>

                <button className='open-fleet-btn' >
                    
                    <div className='open-fleet-flex'>
                    <p>Open Fleet</p>
                    <span> <img src={UpsideRightArrow} alt='upside-right-arrow'></img></span>
                    </div>
                    
                    
                </button>
            </div>
            </div>

            <div className='car-image'>
                <img src={HeroImage} alt='car image' className='hero-car-image'/>
            </div>
            

        </div>

        <div className='hero-form'>
            

        <form className='hero-flex-form'>

        <div className='input-container'>
            <label htmlFor="pickup-address" className='hero-form-label'>Pickup Address:</label>
            <input type="text" id="pickup-address" name="pickup-address" className='hero-form-input' placeholder='Address, airport or hotel' required/>
        </div>

        <div className='input-container' >
           <label htmlFor="dropoff-address" className='hero-form-label' >Dropoff Address:</label>
           <input type="text" id="dropoff-address" className='hero-form-input' placeholder='Distance, Hourly or Flat rate' name="dropoff-address" required/>
        </div>

        <div className='input-container'>
            <label htmlFor="dropoff-date" className='hero-form-label'>Dropoff Date:</label>
            <input type="date" id="dropoff-date" name="dropoff-date" className='hero-form-input' required/>
        </div>

        

        <div className='input-container'>
            <label htmlFor="pickup-date" className='hero-form-label'>Pickup Date:</label>
            <input type="date" id="pickup-date" name="pickup-date" className='hero-form-input' required/>
        </div>

        

        <button className='hero-form-btn' type="submit">
            <img src={BookingIcon} alt='booking-icon' ></img>
            <p className='cta-text'>Book Now</p>
        </button>
        </form>
            

        </div>


    </div>

    <div className='green-box'>

    </div>
    
    </div>
  )
}

export default hero