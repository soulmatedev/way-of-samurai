import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => (
    <header className={styles.header}>
        <img
            src='https://png.pngtree.com/png-clipart/20230207/original/pngtree-beauty-logo-design-png-image_8947095.png'
            alt=''/>
      <div className={styles.login_block}>
        <p>{ props.isAuth ? props.login
          : <NavLink to={'/login'}>Login</NavLink>}</p>
      </div>
    </header>
)

export default Header;
