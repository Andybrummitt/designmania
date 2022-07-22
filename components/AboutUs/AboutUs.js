import styles from "./AboutUs.module.css";

const AboutUs = () => {
    return ( 
        <section className={styles.container}>
        <h1>About Us</h1>
            <p>
                Design Mania Limited is the parent company to both LIQUID id. and Oculus Media.
            </p>
            <p>
                At LIQUID id. we have specialised in bespoke corporate Champagne and Wine gifts since 1998. We have brought luxury gifts with innovative design to the online marketplace since the very start. Our long history in the industry has enabled us to source some of the finest available Champagnes and Wines to personalise with your company branding.
            </p>
            <p>
                Design Mania limited has now also started a media production company called Oculus Media. Oculus Media was started to enable small/medium sized businesses to create promotional video content like the big dogs for a fraction of the cost. At Oculus media imagination is our foundation. We are passionate about the content we produce for our clients and continue to raise the bar for affordable video production.
            </p>
            <div className={styles.links}>
                <button><a href="https://www.liquidid.co.uk/"><span>LIQUID id.</span></a></button>
                <button><a href="https://www.oculusmedia.co.uk/"><span>Oculus Media</span></a></button>
            </div>
        </section>
     );
}
 
export default AboutUs;