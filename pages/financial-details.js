import styles from "../styles/financialDetails.module.css";

const FinancialDetails = () => {
  return (
    <section className={styles.container}>
      <h1>FINANCIAL DETAILS</h1>
      <h4>Bankers</h4>
      <p>Barclays Bank PLC</p>
      <p>40-41 High Street Chelmsford</p>
      <p>CM1 1BE</p>
      <p>Account Number: 70207098</p>
      <p>Sort Code: 20-19-95</p>
      <p>Account Name: Design Mania Ltd</p>
      <p>VAT Registration Number: 220 1210 93</p>
      <p>Company Registration Number: 03616535</p>
    </section>
  );
};

export default FinancialDetails;
