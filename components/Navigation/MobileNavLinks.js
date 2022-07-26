import Link from "next/link";
import styles from "./Navigation.module.css";

const MobileNavLinks = ({ setNavLinksOpen, navLinksOpen }) => {
  const handleMobileClick = () => {
      setNavLinksOpen(false);
  };

  return (
    <div className={`${styles.navLinksContainer} ${navLinksOpen && styles.open}`}>
      <ul className={styles.navLinks} onClick={handleMobileClick}>
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

export default MobileNavLinks;
