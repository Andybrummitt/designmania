import Head from "next/head";
import styles from "../styles/financialDetails.module.css";

const FinancialDetails = () => {
  return (
    <>
      <Head>
        <title>Financial Details | Design Mania Limited</title>
        <meta name="description" content="Design Mania Limited is the parent company to both LIQUID id. and Musing Media (formerly Oculus Media). Find out more about our services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <section className={styles.container}>
      <h1 className="page-title">FINANCIAL DETAILS</h1>
      <div className={styles.contentContainer}>
        <div>
          <h3>Bankers:</h3>
          <p>Barclays Bank PLC</p>
          <p>40-41 High Street Chelmsford</p>
          <p>CM1 1BE</p>
        </div>
        <div>
          <h3>Account Information:</h3>
          <p>Account Number: 70207098</p>
          <p>Sort Code: 20-19-95</p>
          <p>Account Name: Design Mania Ltd</p>
        </div>
      </div>
      <div className={styles.registrationNumbers}>
          <p><strong>VAT Registration Number:</strong> 220 1210 93</p>
          <p><strong>Company Registration Number:</strong> 03616535</p>
      </div>
    </section>
    </>
  );
};

export default FinancialDetails;
