// const tours = [
//   {
//     id: 1,
//     title: "اربیل",
//     image: "/images/1.png",
//     info: "مهر ماه، 3 روزه - پرواز - هتل 3 ستاره",
//     price: "12,500,000 تومان",
//   },
//   {
//     id: 2,
//     title: "استانبول",
//     image: "/images/2.png",
//     info: "مهر ماه، 6 روزه - پرواز - هتل 5 ستاره",
//     price: "27,500,000 تومان",
//   },
//   {
//     id: 3,
//     title: "تور مادرید",
//     image: "/images/3.png",
//     info: "مهر ماه، 3 روزه - پرواز - هتل 5 ستاره",
//     price: "34,000,000 تومان",
//   },
//   {
//     id: 4,
//     title: "تور دبی",
//     image: "/images/4.png",
//     info: "مهر ماه، 3 روزه - پرواز - هتل 3 ستاره",
//     price: "7,500,000 تومان",
//   },
//   {
//     id: 5,
//     title: "تور کیش",
//     image: "/images/5.png",
//     info: "مهر ماه، 3 روزه - پرواز - هتل 3 ستاره",
//     price: "7,500,000 تومان",
//   },
//   {
//     id: 6,
//     title: "تور ایتالیا",
//     image: "/images/6.png",
//     info: "مهر ماه، 6 روزه - پرواز - هتل 5 ستاره",
//     price: "27,500,000 تومان",
//   },
//   {
//     id: 7,
//     title: "تور آفرود",
//     image: "/images/7.png",
//     info: "مهر ماه، 3 روزه - پرواز - هتل 3 ستاره",
//     price: "34,000,000 تومان",
//   },
//   {
//     id: 8,
//     title: "تور مازندران",
//     image: "/images/8.png",
//     info: "مهر ماه، 3 روزه - پرواز - هتل 3 ستاره",
//     price: "7,500,000 تومان",
//   },
// ];

// export default function TourSection({ toursData }) {
//   if (!toursData) return <p>نتیجه ای یافت نشد</p>;
//   return (
//     <div className={styles.container}>
//       <h1>همه تور ها</h1>

//       <div className={styles.grid}>
//         {toursData?.map((tour) => (
//           // <TourCard
//           //   key={tour?.id}
//           //   image={tour?.image}
//           //   title={tour?.title}
//           //   info={`${tour.origin?.name} → ${tour.destination?.name}`} // 🔥 مهم
//           //   price={tour.price}
//           // />
//           <section key={tour?.id}>
//             <h2>{tour?.title}</h2>
//             <Link href={`/tours/${tour?.id}`}> رزرو</Link>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }
import TourCard from "../../ui/TourCard";
// import Link from "next/link";
import styles from "./TourSection.module.css";

export default function TourSection({ toursData }) {
  const tours = Array.isArray(toursData) ? toursData : [];

  if (!tours.length) return <p>نتیجه‌ای یافت نشد</p>;

  return (
    <div className={styles.container}>
      <h1>همه تورها</h1>

      <div className={styles.grid}>
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}
