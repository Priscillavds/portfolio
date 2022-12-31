import styles from "./Root.module.css";
import {Outlet, NavLink} from "react-router-dom";

const Root = () => {
    return (
        <>
            <header>
                <nav className={styles.topNavigation}>
                    <ul>
                        <li><NavLink className={({isActive}) => isActive ? styles.active : styles.notactive} to="/" >Home</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? styles.active : styles.notactive} to="labo">Labo</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? styles.active : styles.notactive} to="contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Outlet/>
        </>
    );
  }

  export default Root;