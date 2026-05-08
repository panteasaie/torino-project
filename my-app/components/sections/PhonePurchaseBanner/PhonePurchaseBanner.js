import styles from "./PhonePurchaseBanner.module.css";
import Image from "next/image";

export default function Bannner() {
  return (
    <div className={styles.container}>
      <div className={styles.rightPanel}>
        <div className={styles.content}>
          <h2>
            خرید تلفنی از <span className={styles.brand}>تورینو</span>
          </h2>

          <p> به هر کجا که می خواهید</p>
        </div>

        <Image
          src="/images/oprator.png"
          alt="operator"
          width={250}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.leftPanel}>
        <p className={styles.phone}>
          021-1840
          <Image src="/images/call.png" width={16} height={16} className={styles.iconCall} />
        </p>
        <button className={styles.button}>اطلاعات بیشتر</button>
      </div>
    </div>
  );
}
