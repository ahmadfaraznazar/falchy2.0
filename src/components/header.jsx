import '../styles/header.css'
import logo from '../assets/Falchy.svg'
import sidebarButton from '../assets/sidebar-menu.svg'

const header = () => {
  return (
    <div className='header-all-content'>
    <div className='header'>
        <div className='logo'>
            <img src={logo}/>
        </div>
        <div className='header-links'>
            <a className='header-link'>Home</a>
            <a className='header-link'>About Us</a>
            <a className='header-link'>Our Services</a>
            <a className='header-link'>Our Fleet</a>
            <a className='header-link'>Contact Us</a>

        </div>
        <div className='lang-menu'>
            <div>
            <div className="custom-select">
                <select name="options">
                    <option value=""><span>Flag</span> ENG</option>
                    <option value="1">Option One</option>
                    <option value="2">Option Two</option>
                    <option value="3">Option Three</option>
                </select>
            </div>
            </div>
            <div className='sidebar-menu'>
                <img src={sidebarButton}></img>
            </div>

        </div>

    </div>
    </div>
  )
}

export default header