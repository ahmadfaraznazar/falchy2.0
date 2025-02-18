import '../styles/landingBanner.css'
import CarImg from '../assets/Car-Img.png'

const landingBanner = () => {
  return (
    <div className='landing-banner-section'>
      <div className='landing-banner-container'>

      <div className='landing-banner-content'>
        <div className='landing-banner-text'>
            <h1 className='landing-banner-heading'>Your next travel
            with us?</h1>
            <p className='landing-banner-paragraph'>Use our online tool to calculate the total cost of your ride</p>
        </div>
        <button className='landing-banner-button'>
          Calculate Now
        </button>

      </div>

      <div className='landing-banner-image-container'>
        <img src={CarImg} alt='placeholder' />

      </div>





      </div>
    </div>
  )
}

export default landingBanner