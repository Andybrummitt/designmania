import styles from "./Hero.module.css";

const Hero = () => {
    return ( 
        <section className={styles.hero}>
            <video className={styles.heroVideo} src="../../hero-video.mp4" autoPlay loop muted type="video/mp4" />
            <div className={styles.heroTextContainer}>
                <span>ESTABLISHED 1998</span>
                <h1>True Creativity</h1>
                <h2>Ripples through the noise</h2>
            </div>
        </section>
     );
}
 
export default Hero;