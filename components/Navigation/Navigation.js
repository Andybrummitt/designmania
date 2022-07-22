import NavLinks from "./NavLinks";
import styles from "./Navigation.module.css";
import logo from "../../public/Design-Mania-Logo.png";
import Image from "next/image";

const Navigation = () => {
    return ( 
        <nav className={styles.navigation}>
            <Image src={logo} height={100} width={455}/>
            <NavLinks />
        </nav>
     );
}
 
export default Navigation;