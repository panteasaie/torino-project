// pages/500.js
import Image from "next/image";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer/Footer";
import styles from "../styles/500.module.css";

export default function Custom500() {
  return (
    <Layout>
      <main className={styles.wrapper}>
        <section className={styles.card}>
          <div className={styles.content}>
        
            <div className={styles.illustration}>
              <Image
                src="/images/error.png" 
                alt="server error"
                width={420}
                height={320}
                priority
              />
            </div>

        
            <div className={styles.text}>
              <h2 className={styles.title}>اتصال با سرور برقرار نیست!</h2>
              <p className={styles.desc}>لطفا بعدا دوباره امتحان کنید.</p>
            </div>
          </div>
        </section>

        
        <Footer />
      </main>
    </Layout>
  );
}