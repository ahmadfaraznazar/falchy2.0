import '../styles/hero.css'
import HeroImage from '../assets/Hero-Car.png'

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
                <image src={HeroImage} alt='car image' width='1155px'></image>
            </div>
            

        </div>

        <div className='hero-form'>
            

        </div>


    </div>
    </div>
  )
}

export default hero