import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import styles from './Navbar.module.scss';
import logo from '../../assets/images/logo.svg';
import profileImage from '../../assets/images/profile.png';
import searchIcon from '../../assets/icons/navbar/search-icon.svg';
import notificationIcon from '../../assets/icons/navbar/notification-icon.svg';
import dropdownIcon from '../../assets/icons/navbar/dropdown-icon.svg';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <HamburgerMenu />

        <div className={styles.logo}>
          <img src={logo} alt="Lendsqr" />
        </div>

        <form className={styles.searchForm} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for anything"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            <img src={searchIcon} alt="Search" />
          </button>
        </form>

        <div className={styles.rightSection}>
          <Link to="/docs" className={styles.docs}>
            Docs
          </Link>

          <button className={styles.notification} type="button">
            <img src={notificationIcon} alt="Notifications" />
          </button>

          <div className={styles.profile}>
            <img
              src={profileImage}
              alt="Adedeji Profile"
              className={styles.avatar}
            />
            <span className={styles.username}>Adedeji</span>
            <img src={dropdownIcon} alt="Dropdown" className={styles.dropdownIcon} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
