import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h1 className="page-title">Contact</h1>
      <div className={styles.contentContainer}>
        <div>
          <h3>Company Address:</h3>
          <p>Design Mania Ltd</p>
          <p>7 Oak Industrial Park</p>
          <p>Chelmsford Road</p>
          <p>Great Dunmow</p>
          <p>Essex</p>
          <p>CM6 1XN</p>
          <p>United Kingdom</p>
        </div>
        <div></div>
        <div>
          <h3>Contact Details:</h3>
          <p>Tel (+44) 01371 829295</p>
          <br />
          <p>info@designmania.co.uk</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
