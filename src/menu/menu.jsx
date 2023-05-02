import classes from './menu.module.css';

function Menu() {
    return (
        <nav className={classes.menu}>
            <ul className={classes.menu__list}>
                <li className={classes.menu__item}>
                    <a href="#" className={classes.menu__link}>Home</a>
                </li>
                <li className={classes.menu__item}>
                    <a href="#" className={classes.menu__link}>About</a>
                </li>
                <li className={classes.menu__item}>
                    <a href="#" className={classes.menu__link}>Contacts</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;