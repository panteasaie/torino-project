import ImageGalllary from '../../ui/ImageGallary';
import styles from './TourGallary.module.css'; // استایل‌ها برای کامپوننت
import ImageGallary from "../../ui/ImageGallary";


const TourGallary = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.content}>
        {/* ستون چپ: اسلایدر */}
        <div className={styles.left}>
          <ImageGallary/>
        </div>

        {/* ستون راست: متن */}
        <div className={styles.right}>
          <div className={styles.titleRow}>
        
            <h2 className={styles.title}>
              چرا <span className={styles.brand}>تورینو</span>؟
            </h2>
          </div>

          <h3 className={styles.subTitle}>تور طبیعت گردی و تاریخی</h3>

          <p className={styles.description}>
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت
            چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای طبیعت‌گردی
            را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و آثار تاریخی یک
            مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را خریداری کنید.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TourGallary;