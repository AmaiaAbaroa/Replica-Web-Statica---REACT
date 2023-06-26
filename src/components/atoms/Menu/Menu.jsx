
import "./_menu.css";
import downArrow from "./down-arrow.png"



function Menu() {
  return (
       <ul>
            <li><a href="#description_1">DESCRIPTION</a></li>
            <li><a href="#screens_1">FEATURES</a></li>
            <li><a href="#screens_3">SCREEN</a></li>
            <li><a href="#">EXTRA <img id="nav-down-arrow" src={downArrow} /></a></li>  
        </ul>
  )
}

export default Menu