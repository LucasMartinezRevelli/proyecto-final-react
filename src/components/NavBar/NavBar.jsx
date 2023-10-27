import CartWidget from '../CartWidget/CartWidget';
//import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='logoMarolio' src={"./img/logo.png"} alt="Logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="categoria/2">Procesadores</NavLink>
          </li>

          <li>
            <NavLink to="categoria/3">Placas madre</NavLink>
          </li>

          <li>
            <NavLink to="categoria/4">Placas de video</NavLink>
          </li>
          
        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar