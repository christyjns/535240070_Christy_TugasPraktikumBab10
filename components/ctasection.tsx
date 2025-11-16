/* eslint-disable react/no-unescaped-entities */
"use client"
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import styles from './CTASection.module.css';


const tags = [
    "#Pore Care", "#Hydration", "#Firmness",
    "#Radiance", "#Plumping", "#Elasticity",
    "#Whitening", "#Volume-Boost", "#Wrinkle Care"
];

const cardProducts = [
    { name: "Niacinamide 10%", img: "/images/product-niacin.jpg" }, 
    { name: "Matrixyl 10%", img: "/images/product-matrixyl.png" }, 
    { name: "Retinol 0.2%", img: "/images/product-retinol.jpg" } 
];

function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <Container>
                <Row className={styles.ctaRow}>
                    
                    {}
                    <Col lg={7}>
                        <div className={styles.leftCard}>
                            <h3 className={styles.cardTitle}>PICK YOUR BOOSTING SHOT AMPOULE</h3>
                            <p className={styles.cardSubtitle}>SKIN1004 LAB IN NATURE NEW LAUNCHING</p>

                            {}
                            <div className={styles.tagGrid}>
                                {tags.map((tag) => (
                                    <div key={tag} className={styles.tag}>{tag}</div>
                                ))}
                            </div>

                            {}
                            <Row className={styles.productGrid}>
                                {cardProducts.map((product) => (
                                    <Col xs={4} key={product.name} className={styles.productItem}>
                                        <Image
                                            src={product.img}
                                            alt={product.name}
                                            width={150}
                                            height={150}
                                            className={styles.productImage}
                                        />
                                        <p className={styles.productName}>{product.name}</p>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>

                    {}
                    <Col lg={5} className={styles.textCol}>
                        <h2 className={styles.ctaTitle}>Beauty begins From within.</h2>
                        <p className={styles.ctaText}>
                            Great skin doesn't come from many products, 
                            just the right ones that work together.
                        </p>
                        
                        <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                            <Button href="#shop" className="btn-brand-pink" size="lg">
                                Get Glowing
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CTASection;