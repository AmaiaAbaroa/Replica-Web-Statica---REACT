import ButtonAtom from "../components/Button/ButtonAtom";
import "./components/Atoms/NavBar/NavBar.css";
import Logo from "./assets/img/logo.svg";
import {Link}


function NavBar() {
  return (
    <nav>
        <div id="nav_logo">
          <img src={Logo} alt="Logo Sync Barra de navegación" />
        </div>

        <div class="nav_container">
          <div id="nav_list">
            <ul>
              <li><a href="#description_1">DESCRIPTION</a></li>
              <li><a href="#screens_1">FEATURES</a></li>
              <li><a href="#screens_3">SCREEN</a></li>
              <li><a href="#">EXTRA</a></li>
              <img
                class="nav_down_arrow"
                src="./images/iconos/down-arrow.png"
                alt="Down arrow"
              />
            </ul>
          </div>
        </ul>

    </nav>
  )
}

export default NavBar