import { Link, useNavigate } from 'react-router-dom'

import '../../../css/NavBar.css'
import logo from '../../../images/brain-click-icon.png'
import Hamburger from './Hamburger'

const NavBar = ({ hamburgerIsOpen, drawerToggleClickHandler }) => {
  const navigate = useNavigate()

  return (
    <div className="NavBar">
      <Hamburger
        toggled={hamburgerIsOpen}
        handleClick={drawerToggleClickHandler}
      />
      <div className="NavBarItemsContainer">
        <Link className="NavBarItem" to="/">
          List
        </Link>
        <Link className="NavBarItem" to="/">
          about
        </Link>
      </div>
      <div
        className="logoContainer"
        onClick={() => navigate('/')}
        onKeyPress={() => navigate('/')}
        role="button"
        tabIndex={0}
      >
        <img className="logo" src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default NavBar
