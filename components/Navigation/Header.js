
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import styles from "./Navigation.module.css";

const Header = () => {

    return ( 
        <header className={styles.header}>
            <MobileNavigation />
            <Navigation />
        </header>
     );
}
 
export default Header;