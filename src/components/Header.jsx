import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header({ menuListItems }) {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  function ShowMobileNav() {
    if (!nav) {
      return null;
    }

    return (
      <>
        <CloseIcon
          sx={{ color: "black", fontSize: "2.5rem" }}
          onClick={openNav}
          className={styles.closeButton}
        />
        <nav className={styles.mobileNav}>
          <ul>
            {menuListItems.map((item) => (
              <li key={item.sectionId}>
                <Link
                  to="/"
                  onClick={() => {
                    scrollToSection(item.sectionId);
                    openNav();
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </>
    );
  }
  const scrollToSection = (section) => {
    document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <header>
        <nav className={styles.desktopNav}>
          <ul>
            {menuListItems.map((item) => (
              <li key={item.sectionId}>
                <Link
                  to="/"
                  onClick={() => {
                    scrollToSection(item.sectionId);
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ShowMobileNav />
        <MenuIcon
          sx={{ color: "black", fontSize: "2.5rem" }}
          onClick={openNav}
          className={styles.menuIcon}
        />
      </header>
    </>
  );
}
