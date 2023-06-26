import Button from "../atoms/Button/Button";
import Logo from "../atoms/Logo/Logo";
import Menu from "../atoms/Menu/Menu";
import "./_header.css";

function Header() {
  return (
    <header>
        <nav>
            <Logo />
            <Menu />
            <Button className="button-pink">Download</Button>
        </nav>
    </header>
  )
}

export default Header