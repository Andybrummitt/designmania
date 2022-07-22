import NavLinks from "./NavLinks";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import logo from "../../public/Design-Mania-Logo.png";
import Image from "next/image";

const MobileNavigation = () => {

    const [ navLinksOpen, setNavLinksOpen ] = useState(false);

    const hamburgerIcon = <GiHamburgerMenu className={styles.hbIcon} onClick={() => setNavLinksOpen(!navLinksOpen)} />;
    const closeIcon = <AiOutlineClose className={styles.hbIcon} onClick={() => setNavLinksOpen(!navLinksOpen)}/>

    return ( 
        <nav className={styles.mobileNavigation}>
            <Image src={logo} height={40} width={182}/>
            {navLinksOpen ? closeIcon : hamburgerIcon}
            {navLinksOpen ? <NavLinks /> : null}
        </nav>
     );
}
 
export default MobileNavigation;