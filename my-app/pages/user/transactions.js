import React from "react";
import ProfileDeatails from "../../components/sidebar/ProfileDeatails";
import moment from "moment-jalaali";

import { useGetUserTransactions } from "../../core/services/queries";

import styles from "../../styles/transactions.module.css";

export default function Transactions() {
  const { data, isLoading, isError } = useGetUserTransactions();

  if (isLoading) {
    return <p className={styles.message}>در حال دریافت تراکنش ها...</p>;
  }

  if (isError) {
    return <p className={styles.message}>خطا در دریافت اطلاعات</p>;
  }

  if (!data || data.length === 0) {
    return <p className={styles.message}>تراکنشی وجود ندارد</p>;
  }

  return (
    <ProfileDeatails>
      <div className={styles.transactions}>
        <div className={styles.header}>
          <span>تاریخ و ساعت</span>
          <span>مبلغ</span>
          <span>شناسه تراکنش</span>
          <span>نوع تراکنش</span>
        </div>

        {data.map((item) => (
          <div className={styles.transactionCard} key={item.id}>
            <span>{moment(item.createdAt).format("jYYYY/jMM/jDD HH:mm")}</span>

            <span className={styles.price}>
              {item.amount?.toLocaleString()} تومان
            </span>

            <span>{item.id.slice(0, 8)}</span>

            <span
              className={
                item.type === "success" ? styles.success : styles.pending
              }
            >
              {item.type === "success" ? "موفق" : "در انتظار"}
            </span>
          </div>
        ))}
      </div>
    </ProfileDeatails>
  );
}
