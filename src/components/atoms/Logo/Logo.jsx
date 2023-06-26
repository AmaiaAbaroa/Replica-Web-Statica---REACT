import "./_logo.css"
import logo from "../../../assets/img/logo.svg"

function Logo() {
  return (
     <a href="/"><img id="logo-img" src={logo}/></a>
  )
}

export default Logo