import styles from "./Navigation.module.css";

const NavLinks = () => {
    return ( 
        <div className={styles.navLinksContainer}>
        <ul className={styles.navLinks}>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">About Us</a>
            </li>
            <li>
                <a href="">What We Do</a>
            </li>
            <li>
                <a href="">Financial Details</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>
        </div>
     );
}
 
export default NavLinks;