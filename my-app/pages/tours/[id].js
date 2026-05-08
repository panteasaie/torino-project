import { serverFetch } from "../../core/services/http";
import Image from "next/image";
import styles from "../../components/ui/TourDeatails.module.css";
import { FiUserCheck } from "react-icons/fi";
import { useRouter } from "next/router";
import Link from "next/link";
import api from "../../core/config/api";
export default function TourDetails({ tour }) {
  if (!tour) return <p>تور پیدا نشد</p>;
  const tourId = tour?._id || tour?.id;
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("fa-IR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  const vehicleMap = {
    bus: "اتوبوس",
    airplane: "هواپیما",
    train: "قطار",
    ship: "کشتی",
    SUV: "خودروی آفرود",
  };
  const router = useRouter();

  const reserveHandler = async () => {
    try {
      await api.put(`/basket/${tourId}`);

      router.push(`/basket/${tourId}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imageBox}>
          <Image
            src={tour.image}
            alt={tour.title}
            width={300}
            height={200}
            className={styles.image}
          />
        </div>

        <div className={styles.info}>
          <h2 className={styles.title}>{tour.title}</h2>
          <div className={styles.meta}>
            <span>
              {" "}
              <img src="/images/user-tick.png" width={20} height={20} /> تورلیدر
              از مبدا
            </span>
            <span>
              <img src="/images/map.png" width={20} height={20} /> برنامه سفر
            </span>
            <span>
              {" "}
              <img src="/images/medal-star.png" width={20} height={20} /> تضمین
              کیفیت
            </span>
          </div>

          <div className={styles.priceRow}>
            <span className={styles.price}>
              {tour.price?.toLocaleString()} تومان
            </span>
            {tourId && (
              <button onClick={reserveHandler} className={styles.btn}>
                رزرو و خرید
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 🔻 بخش پایین */}
      <div className={styles.footer}>
        <span>
          <img src="/images/routing-2.png" width={20} height={20} />
          مبدا
          <p>{tour.origin.namefa}</p>
        </span>

        <span>
          <img src="/images/9.png" width={20} height={20} />
          تاریخ رفت:{formatDate(tour.startDate)}
        </span>

        <span>
          <img src="/images/10.png" width={20} height={20} />
          تاریخ برگشت:
          <p> {formatDate(tour.endDate)}</p>
        </span>
        <span>
          <img src="/images/bus.png" width={20} height={20} />
          حمل و نقل:
          {vehicleMap[tour.fleetVehicle] || tour.fleetVehicle}
        </span>
        <span>
          <img src="/images/11.png" width={20} height={20} />
          ظرفیت: {tour.availableSeats}
        </span>
        <span>
          <img src="/images/security.png" width={20} height={20} />
          بیمه: {tour.insurance ? "دارد" : "ندارد"}
        </span>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const data = await serverFetch(`/tour/${id}`);

  return {
    props: {
      tour: data || null,
    },
  };
}
// import styles from "./TourDeatails.module.css";

// import styles from "../../components/ui/TourDeatails.module.css"
// export default function TourDetails({ tour }) {
//   if (!tour) return <p>تور پیدا نشد</p>;

//   return (
//     <div className={styles.card}>
//       <div className={styles.content}>
//         {/* 🔹 سمت راست (عکس) */}
//         <div className={styles.imageBox}>
//           <Image
//             src={tour.image}
//             alt={tour.title}
//             width={300}
//             height={200}
//             className={styles.image}
//           />
//         </div>

//         {/* 🔹 سمت چپ (اطلاعات) */}
//         <div className={styles.info}>
//           <h2 className={styles.title}>{tour.title}</h2>

//           <p className={styles.duration}>
//             {new Date(tour.startDate).toLocaleDateString()} -{" "}
//             {new Date(tour.endDate).toLocaleDateString()}
//           </p>

//           <div className={styles.meta}>
//             <span>📍 {tour.origin?.name}</span>
//             <span>➡ {tour.destination?.name}</span>
//             <span>🚍 {tour.fleetVehicle}</span>
//           </div>

//           <div className={styles.priceRow}>
//             <button className={styles.btn}>رزرو و خرید</button>

//             <span className={styles.price}>
//               {tour.price?.toLocaleString()} تومان
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* 🔻 بخش پایین */}
//       <div className={styles.footer}>
//         <span>🛡 بیمه: {tour.insurance ? "دارد" : "ندارد"}</span>
//         <span>👥 ظرفیت: {tour.availableSeats}</span>
//         <span>
//           🗓 تاریخ رفت: {new Date(tour.startDate).toLocaleDateString()}
//         </span>
//         <span>
//           🗓 تاریخ برگشت: {new Date(tour.endDate).toLocaleDateString()}
//         </span>
//       </div>
//     </div>
//   );
// }
// export async function getServerSideProps(context) {
//   const { id } = context.params;

//   const data = await serverFetch(`/tour/${id}`);

//   return {
//     props: {
//       tour: data || null,
//     },
//   };
// }
