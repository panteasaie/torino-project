// import React from 'react'
// import ProfileLayout from './layout';
// import ProfileDeatails from '../../components/sidebar/ProfileDeatails';
// import { useGetUserTours } from "../../core/services/queries";

// export default function MyTours() {

//   const { data, isLoading } = useGetUserTours();

//   if (isLoading) {
//     return <p>در حال دریافت تورها...</p>;
//   }

//   if (!data || data.length === 0) {
//     return <p>توری ثبت نشده</p>;
//   }

//   return (
//     <>
//     <ProfileDeatails>
//     <div>
//       <h2>تورهای من</h2>

//       {data.map((tour) => (
//         <div
//           key={tour.id}
//           style={{
//             border: "1px solid #ddd",
//             padding: "20px",
//             marginBottom: "20px",
//             borderRadius: "10px",
//           }}
//         >
//           <h3>{tour.title}</h3>

//           <p>نام مسافر: {tour.fullName}</p>

//           <p>کد ملی: {tour.nationalCode}</p>

//           <p>جنسیت: {tour.gender}</p>

//           <p>تاریخ تولد: {tour.birthDate || "-"}</p>
//         </div>
//       ))}
//     </div>
//     </ProfileDeatails>
//     </>
//   );
// }
import React from "react";
import ProfileDeatails from "../../components/sidebar/ProfileDeatails";
import { useGetUserTours } from "../../core/services/queries";
import styles from "../../styles/tour.module.css";
import moment from "moment-jalaali";
export default function MyTours() {
  const { data, isLoading, isError } = useGetUserTours();

  if (isLoading) {
    return <p className={styles.stateMessage}>در حال دریافت تورها...</p>;
  }

  if (isError) {
    return <p className={styles.stateMessage}>خطا در دریافت اطلاعات</p>;
  }

  if (!data || data.length === 0) {
    return <p className={styles.stateMessage}>توری ثبت نشده</p>;
  }

  return (
    <ProfileDeatails>
      <div className={styles.myTours}>
        {data.map((tour) => (
          <div className={styles.tourCard} key={tour.id}>
            <div
              className={`${styles.tourStatus} ${
                tour.status === "completed" ? styles.completed : styles.pending
              }`}
            >
              {tour.status === "completed"
                ? "به اتمام رسیده"
                : "در حال برگزاری"}
            </div>

            {/* هدر */}
            <div className={styles.tourHeader}>
              <div className={styles.tourType}>
                <span className={styles.tourIcon}>
                  {tour.vehicleType === "airplane"
                    ? "✈️"
                    : tour.vehicleType === "bus"
                      ? "🚌"
                      : "🚢"}
                </span>

                <span>
                  {tour.vehicleType === "airplane"
                    ? "سفر با هواپیما"
                    : tour.vehicleType === "bus"
                      ? "سفر با اتوبوس"
                      : "سفر با کشتی"}
                </span>
              </div>

              <div className={styles.tourTitle}>{tour.title}</div>
            </div>

            <div className={styles.tourRoute}>
              <div className={styles.routeInfo}>
                <span>
                  {tour.origin?.namefa} به {tour.destination?.namefa}
                </span>
              </div>

              <div className={styles.dateWrapper}>
                <span className={styles.dateLabel}>تاریخ برگشت</span>

                <span className={styles.tourDate}>
                  {moment(tour.endDate).format("jYYYY/jMM/jDD")}
                </span>
              </div>
            </div>

            <div className={styles.tourFooter}>
              <div className={styles.tourPrice}>
                مبلغ پرداخت شده
                <span>{tour.price?.toLocaleString()} تومان</span>
              </div>

              <div className={styles.tourNumber}>شماره تور {tour.id}</div>
            </div>
          </div>
        ))}
      </div>
    </ProfileDeatails>
  );
}
