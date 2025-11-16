/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import Link from "next/link";
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                {}
                <Row className="mb-5">
                    {}
                    <Col lg={3} md={12} className="mb-4 mb-lg-0">
                        <Link href="/" className={styles.footerBrand}>AURA</Link>
                        <ul className={styles.socialIcons}>
                            <li>
                                <a href="#" className={styles.socialIconLink}><i className="bi bi-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#" className={styles.socialIconLink}><i className="bi bi-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#" className={styles.socialIconLink}><i className="bi bi-twitter"></i></a>
                            </li>
                        </ul>
                    </Col>

                    {}
                    <Col lg={2} md={4} xs={6}>
                        <h5 className={styles.footerHeading}>Policies</h5>
                        <ul className={styles.footerNav}>
                            <li className={styles.footerNavItem}><a href="#" className={styles.footerNavLink}>Return</a></li>
                            <li className={styles.footerNavItem}><a href="#" className={styles.footerNavLink}>Shipping</a></li>
                            <li className={styles.footerNavItem}><a href="#" className={styles.footerNavLink}>Terms</a></li>
                            <li className={styles.footerNavItem}><a href="#" className={styles.footerNavLink}>Subscription</a></li>
                        </ul>
                    </Col>
                    <Col lg={2} md={4} xs={6}>
                        <h5 className={styles.footerHeading}>Company</h5>
                        <ul className={styles.footerNav}>
                            <li className={styles.footerNavItem}><a href="#" className={styles.footerNavLink}>Contact</a></li>
                            <li className={styles.footerNavItem}><a href="#" className={styles.footerNavLink}>Stockists</a></li>
                            <li className={styles.footerNavItem}><a href="#" className={styles.footerNavLink}>Glossary</a></li>
                            <li className={styles.footerNavItem}><a href="#" className={styles.footerNavLink}>FAQ</a></li>
                        </ul>
                    </Col>
                    <Col lg={2} md={4} xs={6}>
                        <h5 className={styles.footerHeading}>About</h5>
                        <ul className={styles.footerNav}>
                            <li className={styles.footerNavItem}><a href="#" className={styles.footerNavLink}>Story behind</a></li>
                            <li className={styles.footerNavItem}><a href="#" className={styles.footerNavLink}>Reviews</a></li>
                            <li className={styles.footerNavItem}><a href="#" className={styles.footerNavLink}>History</a></li>
                        </ul>
                    </Col>

                    {}
                    <Col lg={3} md={12} className="mt-4 mt-lg-0">
                        <h5 className={styles.footerHeading}>Contact Us</h5>
                        <ul className={styles.footerNav}>
                            <li className={styles.footerNavItem}><a href="mailto:info@aura.com" className={styles.footerNavLink}>info@aura.com</a></li>
                            <li className={styles.footerNavItem}><span className={styles.footerNavLink}>1 (324) 456 876 46</span></li>
                            <li className={styles.footerNavItem}><span className={styles.footerNavLink}>2118 Thornridge CIR. Syracuse, Indonesia</span></li>
                        </ul>
                    </Col>
                </Row>

                {}
                <Row>
                    <Col>
                        <div className={styles.footerCopyright}>
                            <p className="mb-0">© {new Date().getFullYear()} AURA. All rights reserved by @ Christy Jones.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>   
    )
}