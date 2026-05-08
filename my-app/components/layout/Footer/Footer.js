import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

  const allBadges = [
    { src: "/images/air.png", alt: "airline" },
    { src: "/images/passenger.png", alt: "passenger" },
    { src: "/images/scan.png", alt: "enamad" },
    { src: "/images/samandehi.png", alt: "samandehi" },
    { src: "/images/air1.png", alt: "air" },
  ];
export default function Footer({ badges = allBadges, showLogo = true }) {

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.brandTop}>
            {showLogo && (
              <Image
                src="/images/torino.png"
                alt="Torino"
                width={90}
                height={28}
                className={styles.logo}
              />
            )}{" "}
            <div className={styles.support}>
              <span className={styles.supportLabel}>تلفن پشتیبانی:</span>
              <span className={styles.supportNumber}>021-8574</span>
            </div>
          </div>

          <div className={styles.badges}>
            {badges.map((badge) => (
              <Image
                key={badge.src}
                src={badge.src}
                alt={badge.alt}
                width={64}
                height={64}
              />
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.title}>خدمات مشتریان</h4>
          <ul className={styles.list}>
            <li>
              <Link href="/support">پشتیبانی آنلاین</Link>
            </li>
            <li>
              <Link href="/guide/buy">راهنمای خرید</Link>
            </li>
            <li>
              <Link href="/guide/refund">راهنمای استرداد</Link>
            </li>
            <li>
              <Link href="/faq">پرسش و پاسخ</Link>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4 className={styles.title}>تورینو</h4>
          <ul className={styles.list}>
            <li>
              <Link href="/about">درباره ما</Link>
            </li>
            <li>
              <Link href="/contact">تماس با ما</Link>
            </li>
            <li>
              <Link href="/why-torino">چرا تورینو</Link>
            </li>
            <li>
              <Link href="/bimeh">بیمه مسافرتی</Link>
            </li>
            
          </ul>
        </div>
      </div>

      <div className={styles.copy}>
        <span> کلیه حقوق این وب‌سایت متعلق به تورینو می‌باشد.</span>
      </div>
    </footer>
  );
}
