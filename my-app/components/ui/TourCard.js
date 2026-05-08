import styles from "./TourCard.module.css"
import Link from "next/link";
import Image from "next/image";
export default function TourCard({ tour }) {
  return (
    <div className={styles.card}>
      <Image
        src={tour.image}
        alt={tour.title}
        width={250}
        height={100}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{tour.title}</h3>
        <p className={styles.info}>{tour.options}</p>

        <div className={styles.footer}>
          {/* <button className={styles.button}>رزرو</button> */}
           <Link href={`/tours/${tour?.id}`} className={styles.button}>
              رزرو
            </Link>
          <span className={styles.price}>{tour.price} تومان</span>
        </div>
      </div>
    </div>
  );
}
// import styles from "./TourCard.module.css"
// import Link from "next/link";
// import Image from "next/image";
// export default function TourCard({ tour }) {
//   return (
//     <div className={styles.card}>
//       <Image
//         src={tour.image}
//         alt={tour.title}
//         width={250}
//         height={100}
//         className={styles.image}
//       />

//       <div className={styles.content}>
//         <h3 className={styles.title}>{tour.title}</h3>

//         <p className={styles.info}>
//           {tour.origin?.name} → {tour.destination?.name}
//         </p>

//         <div className={styles.footer}>
//           <Link href={`/tours/${tour?.id}`}>رزرو</Link>

//           <span className={styles.price}>
//             {tour.price?.toLocaleString()} تومان
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default function TourCard({ tour }) {
//   return (
//     <div>
//       <Image
//         src={tour.image}
//         alt={tour.title}
//         width={300}
//         height={200}
//       />

//       <h3>{tour.title}</h3>

//       <p>
//         {tour.origin?.name} → {tour.destination?.name}
//       </p>

//       <div>
//         <Link href={`/tours/${tour.id}`}>
//           رزرو
//         </Link>

//         <span>
//           {tour.price?.toLocaleString()} تومان
//         </span>
//       </div>
//     </div>
//   );
// }