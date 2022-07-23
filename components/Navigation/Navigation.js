import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Design-Mania-Logo.png";
import styles from "./Navigation.module.css";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <a>
          <Image src={logo} height={100} width={455} />
        </a>
      </Link>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
