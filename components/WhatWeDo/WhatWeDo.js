import Image from "next/image";
import liquidIdScreen from "../../public/Liquid-id-mac.png";
import oculusScreen from "../../public/Oculus-mac.png";
import styles from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  return (
    <section className={styles.container} id="what-we-do">
      <h1 className="page-title">What we do</h1>
      <div className={styles.contentContainer}>
      <article>
        <h2>LIQUID id.</h2>
        <div className={styles.imageWrapper}>
          <Image src={liquidIdScreen} height={322} width={400} />
        </div>
        <div>
          <p>
            LIQUID id. offers a fabulous range of Corporate Champagne, Wine,
            Port & Whisky gifts, professionally personalised with your Company
            logo and message.
          </p>
          <p>
            We have been supplying corporate gifts since 1998 and can promise
            you an excellent quality service which is sure to be remembered, and
            our unrivalled personalisation service will ensure that your clients
            or employees appreciate such a unique and individual gift.
          </p>
          <p>
            Our fast and efficient delivery service can be tailored to suit your
            needs, meaning you can recieve your corporate gifts as quickly as
            possible or on a date of your choosing.
          </p>
        </div>
        <button className={styles.linkButton}>
        <a href="https://www.liquidid.co.uk/">
            <span>LIQUID id.</span>
        </a>
        </button>
      </article>
      <article>
        <h2>Oculus Media</h2>
        <div className={styles.imageWrapper}>
          <Image src={oculusScreen} height={322} width={400} />
        </div>
        <div>
          <p>
            Here at Oculus Media we asked ourselves why can't small businesses
            achieve professional video content without paying thousands to do
            so...
          </p>
          <p>
            We were quoted £2.5K on average for a 60 second simple business
            introduction video. Isn't that crazy!
          </p>
          <p>
            That's why we decided to provide the same professional service for a
            fraction of the cost!
          </p>
          <p>
            Allowing small businesses to show off their services like the big
            dogs.
          </p>​​
        </div>
        <button className={styles.linkButton}>
          <a href="https://www.oculusmedia.co.uk/">
            <span>Oculus Media</span>
          </a>
        </button>
      </article>
      </div>
    </section>
  );
};

export default WhatWeDo;
