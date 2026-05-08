import Image from "next/image";
import Link from "next/link";
import Footer from "../components/layout/Footer/Footer";
import styles from "../styles/404.module.css";
import Layout from "../components/layout/Layout";

export default function Custom404() {
  
  return (
    <>
    
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>صفحه مورد نظر یافت نشد!</h2>

            <Link href="/" className={styles.button}>
              بازگشت به صفحه اصلی
            </Link>
          </div>

          <div className={styles.image}>
            <Image
              src="/images/404.png"
              alt="404"
              width={420}
              height={350}
              priority
            />
          </div>
        </div>
 
      </div>
    </div>
    </>
  );
}
