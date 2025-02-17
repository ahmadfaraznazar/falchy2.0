import '../styles/hero.css'
import HeroImage from '../assets/Hero-Car.png'
import BookingIcon from '../assets/booking-icon.svg'

const hero = () => {
  return (
    <div className='hero-section'>
        <div className='hero-all-content'>
        <div className='hero-content'>

            <div className='heading'>
                    <h1 className='hero-heading'>
                    Limousine  
                    <span className='vip'> VIP </span> 
                    Transfers
                    </h1>
            </div>

            <div className='paragraph'>
                <p className='hero-paragraph'>
                We provide reliable and convenient 24/7 airport taxi services in Italy. Our fleet of modern vehicles and experienced drivers will ensure you have a safe, comfortable, and stress-free journey to your destination. 
                </p>

                <button className='open-fleet-btn'>
                    Open Fleet
                </button>
            </div>

            <div className='car-image'>
                <image src={HeroImage} alt='car image' className='hero-car-image'></image>
            </div>
            

        </div>

        <div className='hero-form'>
            

        <form>

        <div className='input-container'>
            <label htmlFor="pickup-address" className='hero-form-label'>Pickup Address:</label>
            <input type="text" id="pickup-address" name="pickup-address" className='hero-form-input' placeholder='enter pickup address' required/>
        </div>

        <div className='input-container' >
           <label htmlFor="dropoff-address" className='hero-form-label' >Dropoff Address:</label>
           <input type="text" id="dropoff-address" className='hero-form-input' placeholder='enter dropoff address' name="dropoff-address" required/>
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
            <p>Book Now</p>
        </button>
        </form>
            

        </div>


    </div>
    </div>
  )
}

export default hero