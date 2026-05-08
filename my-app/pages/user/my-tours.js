import React from 'react'
import ProfileLayout from './layout';
import ProfileDeatails from '../../components/sidebar/ProfileDeatails';
import { useGetUserTours } from "../../core/services/queries";

export default function MyTours() {
  
  const { data, isLoading } = useGetUserTours();

  if (isLoading) {
    return <p>در حال دریافت تورها...</p>;
  }

  if (!data || data.length === 0) {
    return <p>توری ثبت نشده</p>;
  }

  return (
    <>
    <ProfileDeatails>
    <div>
      <h2>تورهای من</h2>

      {data.map((tour) => (
        <div
          key={tour.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>{tour.title}</h3>

          <p>نام مسافر: {tour.fullName}</p>

          <p>کد ملی: {tour.nationalCode}</p>

          <p>جنسیت: {tour.gender}</p>

          <p>تاریخ تولد: {tour.birthDate || "-"}</p>
        </div>
      ))}
    </div>
    </ProfileDeatails>
    </>
  );
}
