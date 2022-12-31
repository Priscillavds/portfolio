import { useParams,  Outlet, createBrowserRouter, RouterProvider, Route, NavLink,Link } from "react-router-dom";
import styles from "./LaboList.module.css";


const LaboList = () => {
    return (
        <>
        <header className={styles.header}>TodoApp</header>

        <div className={styles.container}>
            <ul className={styles.imageList}>
                <li><Link to="/colorselection"><p>Select the colors</p><img src={require("./assets/Colorselectie.png")} alt="Colorselectie" width="300"/></Link></li>
                <li><Link to="/counterlist"><p>A simple counter</p><img src={require("./assets/Counterlist.png")} alt="Counterlist" width="300"/></Link></li>
                <li><Link to="/localstorage"><p>Funny jokes you can read</p><img src={require("./assets/Localstorage.png")} alt="Localstorage" width="300"/></Link></li>
                <li><Link to="/pokemon"><p>Filter the pokemon</p><img src={require("./assets/Pokemon.png")} alt="Pokemon" width="300"/></Link></li>
                <li><Link to="/interval"><p>The Time and random numbers</p><img src={require("./assets/Interval.png")} alt="Interval" width="300"/></Link></li>
                <li><Link to="/shoppinglist"><p>A list to go shopping</p><img src={require("./assets/ShoppingList.png")} alt="ShoppingList" width="300"/></Link></li>
                <li><Link to="/slots"><p>Turn the slots to win</p><img src={require("./assets/Slots.png")} alt="Slots" width="300"/></Link></li>
                <li><Link to="/todoapp"><p>List what you have to do</p><img src={require("./assets/TodoApp.png")} alt="TodoApp" width="300"/></Link></li>
            </ul>
        </div>
      
        </>
    )
}
  export default LaboList;