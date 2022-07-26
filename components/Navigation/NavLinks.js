import Link from "next/link";
import styles from "./Navigation.module.css";

const NavLinks = () => {

  return (
    <div className={styles.navLinksContainer}>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/#about-us">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/#what-we-do">
            <a>What We Do</a>
          </Link>
        </li>
        <li>
          <Link href="financial-details">
            <a>Financial Details</a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
