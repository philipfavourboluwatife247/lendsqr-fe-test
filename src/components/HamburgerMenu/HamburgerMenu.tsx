import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './HamburgerMenu.module.scss';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button 
        className={styles.hamburger} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`${styles.line} ${isOpen ? styles.open : ''}`}></span>
        <span className={`${styles.line} ${isOpen ? styles.open : ''}`}></span>
        <span className={`${styles.line} ${isOpen ? styles.open : ''}`}></span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className={styles.overlay} 
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`${styles.mobileSidebar} ${isOpen ? styles.open : ''}`}>
        <Sidebar onClose={closeMenu} />
      </div>
    </>
  );
};

export default HamburgerMenu;
