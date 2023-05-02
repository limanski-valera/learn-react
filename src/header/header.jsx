import Menu from "../menu/menu";
import logo from "./../logo.svg";
import classes from "./header.module.css";

function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <a href="#" className={classes.App_logo}><img src={logo} alt="logo" /></a>
                <Menu />
            </div>
        </header>
    );
}

export default Header;
