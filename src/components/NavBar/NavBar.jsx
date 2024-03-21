import {CartWidget} from '../CartWidget/CartWidget'
import {Link} from "react-router-dom";
import {GenericButton} from '../CustomControls/GenericButton'
import logo from '../../assets/laFusaLogo.svg'
import './NavBarStyle.css'

export const NavBar = () =>  {
  return (
    <>
      <div className="d-flex flex-column align-items-between">
        <nav className="d-flex justify-content-around mt-2">
          <Link to="/">
            <img src={logo} alt='' width="60" height="60" style={{ backgroundColor: 'white'}}/>
          </Link>
          <div>
            <Link to="/">
              <GenericButton label={'Home'} color={'gray'} />                        
            </Link>
            <Link to="/category/guitars">
              <GenericButton label={'Guitarras'} color={'gray'} />            
            </Link>
            <Link to="/category/amps">
              <GenericButton label={'Amplificadores'} color={'gray'} />
            </Link>
            <Link to="/category/pedals">
              <GenericButton label={'Pedales'} color={'gray'} />
            </Link>
          </div>
          <Link to="/cart">
            <CartWidget/>
          </Link>
        </nav>
      </div>
    </>
  )
}