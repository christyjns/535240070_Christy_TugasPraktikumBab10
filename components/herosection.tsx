"use client"
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap'; 
import styles from './HeroSection.module.css'; 

const slides = [
    {
        title: "Find Serenity in the Embrace",
        subtitle: "Discover our new line of skincare, crafted from the purest natural ingredients.",
        imageUrl: "/images/banner_01.jpg", 
    },
    {
        title: "Elevate Your Ritual",
        subtitle: "Skincare that feels as good as it looks. Clean, simple, and effective.",
        imageUrl: "/images/banner_02.jpg", 
    },
    {
        title: "Radiance, Bottled",
        subtitle: "Meet the new serum that's changing the game. Get your glow on.",
        imageUrl: "/images/banner_03.jpg",
    },
];

const HeroSection = () => {
    return (
        <div className={styles.heroContainer}>
            <Carousel fade interval={4000} controls={false} indicators={true}>
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        {}
                        <div 
                            className={styles.heroItem}
                            style={{ backgroundImage: `url(${slide.imageUrl})` }}
                        >
                            {}
                            <div className={styles.heroOverlay}></div>
                        </div>

                        {}
                        <Carousel.Caption className={styles.heroCaption}>
                            <h1 className={styles.heroTitle}>{slide.title}</h1>
                            <p className={styles.heroSubtitle}>{slide.subtitle}</p>
                            <Button href="#shop" className={styles.heroButton}>
                                Shop Now
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default HeroSection;