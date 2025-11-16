"use client"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from './BestSellers.module.css';


const products = [
    { name: "Matrixyl 10 Boosting Shot Ampoule", price: "$24.00", img: "/images/product-matrixyl.png" },
    { name: "Retinol 0.2 Boosting Shot Ampoule", price: "$36.00", img: "/images/product-retinol.jpg" },
    { name: "Niacinamide 10 Boosting Shot Ampoule", price: "$48.00", img: "/images/product-niacin.jpg" }
];

function BestSellers() {
    return (
        <section className="py-5">
            <Container>
                <Row>
                    <Col>
                        <h2 className={styles.sectionTitle}>Our best selling Products</h2>
                    </Col>
                </Row>
                <Row>
                    {products.map((product) => (
                        <Col md={4} key={product.name} className="mb-4">
                            <Link href="#" className={styles.productCard}>
                                <div className={styles.productImageWrapper}>
                                    <Image
                                        src={product.img}
                                        alt={product.name}
                                        fill 
                                        className={styles.productImage}
                                    />
                                </div>
                                <div className={styles.productInfo}>
                                    <h5 className={styles.productName}>{product.name}</h5>
                                    <p className={styles.productPrice}>{product.price}</p>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default BestSellers;