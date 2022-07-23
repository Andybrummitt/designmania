import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../public/Design-Mania-Logo.png";
import styles from "./Navigation.module.css";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  const [navLinksOpen, setNavLinksOpen] = useState(false);

  const hamburgerIcon = (
    <GiHamburgerMenu
      className={styles.hbIcon}
      onClick={() => setNavLinksOpen(!navLinksOpen)}
    />
  );
  const closeIcon = (
    <AiOutlineClose
      className={styles.hbIcon}
      onClick={() => setNavLinksOpen(!navLinksOpen)}
    />
  );

  return (
    <nav className={styles.mobileNavigation}>
      <Link href="/">
        <a>
          <Image src={logo} height={40} width={182} />
        </a>
      </Link>
      {navLinksOpen ? closeIcon : hamburgerIcon}
      {navLinksOpen ? (
        <NavLinks isMobile={true} setNavLinksOpen={setNavLinksOpen} />
      ) : null}
    </nav>
  );
};

export default MobileNavigation;
