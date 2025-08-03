'use client'
import React, { useState,useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
// Detect click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);


  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">
              <img src="./navbar_logo_white.png" alt="Logo" className={styles.logoImage} />
          </Link>
        </div>
        <div className={`${styles.menuLinks} ${isOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/privacy" className={styles.navLink}>Privacy Policy</Link>
          <Link href="/contacts" className={styles.navLink}>Contact</Link>
        </div>
        <div className={styles.burger} onClick={toggleMenu}>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
