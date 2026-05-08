import { useRouter } from "next/router";
import React from 'react'

function TourTrip() {
    const handleReserve = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/basket/${tour.id}`,
      {
        method: "PUT",
      }
    );

    if (!res.ok) throw new Error("خطا در رزرو");

    alert("تور به سبد خرید اضافه شد ✅");

    router.push("/basket"); // 👈 بعد از رزرو برو سبد خرید
  } catch (err) {
    console.error(err);
    alert("مشکلی پیش آمد ❌");
  }
};
  return (
    <div>TourTrip</div>
  )
}

export default TourTrip