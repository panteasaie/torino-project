import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../components/ui/Tourdeatails.module.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { serverFetch } from "../../core/services/http";
import api from "../../core/config/api";
import { createOrderApi } from "../../core/config/createOrderApi";

export default function Basket({ tour }) {
  const router = useRouter();
  // const { tourId } = router.query;
  const tourId = tour?._id;

  const [fullName, setFullName] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [error, setError] = useState("");
  // const buyHandler = async () => {
  //   setError("");

  //   if (!fullName || !nationalCode || !gender || !birthDate) {
  //     setError("همه فیلدها الزامی هستند");
  //     return;
  //   }

  //   try {
  //     const res = await createOrderApi({
  //       tourId,
  //       fullName,
  //       nationalCode,
  //       gender,
  //       birthDate,
  //     });

  //     console.log(res.data);

  //     router.push("/user/my-tours");
  //   } catch (err) {
  //     console.log(err);

  //     setError(err?.message || "خطا در ثبت سفارش");
  //   }
  // };
  const buyHandler = async () => {
  setError("");

  if (!fullName || !nationalCode || !gender || !birthDate) {
    setError("همه فیلدها الزامی هستند");
    return;
  }

  try {
    // ثبت سفارش
    const res = await createOrderApi({
      tourId,
      fullName,
      nationalCode,
      gender,
      birthDate,
    });

    // آپدیت پروفایل
    await api.put("/user/profile", {
      name: fullName,
      nationalCode,
      gender,
      birthDate,
    });

    console.log(res.data);

    router.push("/user/my-tours");
  } catch (err) {
    console.log(err);

    setError(err?.message || "خطا در ثبت سفارش");
  }
};
  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h3>مشخصات مسافر</h3>
        <input
          placeholder="نام و نام خانوادگی"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          placeholder="کدملی"
          value={nationalCode}
          onChange={(e) => setNationalCode(e.target.value)}
        />

        <DatePicker
          value={birthDate}
          onChange={(value) => {
            setBirthDate(value?.format("YYYY-MM-DD"));
          }}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          inputClass={styles.input}
          placeholder="تاریخ"
        />

        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">جنسیت</option>
          <option value="male">مرد</option>
          <option value="female">زن</option>
        </select>
      </div>

      <div className={styles.summary}>
        <h3>{tour?.title || "تور"}</h3>
        <p className={styles.duration}>{tour?.options || "—"}</p>

        <div className={styles.priceBox}>
          <span>قیمت نهایی</span>
          <p>{tour?.price?.toLocaleString()} تومان</p>
        </div>

        {/* <Link href="/user/my-tours" onClick={buyHandler} className={styles.btn}>
          ثبت و خرید نهایی
        </Link> */}
        <button onClick={buyHandler} className={styles.btn}>
          ثبت و خرید نهایی
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { tourId } = context.params;

  console.log("TOUR ID:", tourId);

  const tour = await serverFetch(`/tour/${tourId}`);

  console.log("TOUR DATA:", tour);

  return {
    props: {
      tour: tour || null,
    },
  };
}
