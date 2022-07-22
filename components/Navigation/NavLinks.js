import styles from "./Navigation.module.css";
import Link from "next/link";

const NavLinks = () => {
    return ( 
        <div className={styles.navLinksContainer}>
        <ul className={styles.navLinks}>
            <li>
                <Link href="/"><a>Home</a></Link>
            </li>
            <li>
                <a>About Us</a>
            </li>
            <li>
                <a>What We Do</a>
            </li>
            <li>
                <Link href="financial-details"><a>Financial Details</a></Link>
            </li>
            <li>
                <a>Contact</a>
            </li>
        </ul>
        </div>
     );
}
 
export default NavLinks;