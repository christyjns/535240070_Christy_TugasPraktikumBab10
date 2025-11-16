'use client' 
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavDropdown, Button } from 'react-bootstrap';
import styles from './Navbar.module.css'; 

function CustomNavbar() { 
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) { 
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}>
            <div className={styles.navbarContainer}>
                
                {}
                <div className={styles.navLeft}>
                    
                    {}
                    <a href="#menu" className={styles.navLinkWithIcon}>
                        <i className="bi bi-list fs-5"></i> MENU
                    </a>
                    
                    {}
                    <NavDropdown 
                        title={
                            <> {}
                                PRODUCTS
                                {}
                                <i className="bi bi-chevron-down" style={{ fontSize: '0.7rem', marginLeft: '0.25rem' }}></i>
                            </>
                        }
                        id="basic-nav-dropdown"
                    >
                        <NavDropdown.Item href="#action/3.1">Skincare</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Makeup</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Body Care</NavDropdown.Item>
                    </NavDropdown>

                    {}
                    <Link href="#about" className={styles.navLink}>ABOUT</Link>
                </div>

                {}
                <div className={styles.navCenter}>
                    <Link href="/" className={styles.navBrand}>
                        AURA
                    </Link>
                </div>

                {}
                <div className={styles.navRight}>
                    {}
                    <Link href="#reviews" className={styles.navLink}>REVIEWS</Link>
                    <Link href="#blog" className={styles.navLink}>BLOG</Link>
                    <Button href="#shop" className={styles.navButton}>SHOP NOW</Button>
                </div>
            </div>
        </nav>
    )
}

export default CustomNavbar;