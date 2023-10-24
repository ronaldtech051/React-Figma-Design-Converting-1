import React, { useState } from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.nav} container ${isOpen ? styles.open : ''}`}>
      <div className="logo">
        <h3>Shiv Mahobia</h3>
      </div>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;