import styles from "./Header.module.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">
            <p>
              Astro<span className={styles.span}>H</span>ouse
            </p>
          </Link>
        </div>
        <div className={styles.links}>
          <Link to="/products">Products</Link>
          <Link to="/">Home</Link>
          <Link to="/">About Us</Link>
          <Button className={styles.loginBtn}>Login</Button>
        </div>
      </nav>
    </>
  );
};

export default Header;
