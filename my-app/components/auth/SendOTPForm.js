import React from "react";
import styles from "./SendOTPForm.module.css";
import { useSendOtp } from "../../core/services/mutations";
import toast from "react-hot-toast";
export default function SendOTPForm({
  mobile,
  setMobile,
  setStep,
  error,
  setError,
}) {
  const { mutate, isPending } = useSendOtp();
  const sendOtpHandler = async (e) => {
    if (!/^09\d{9}$/.test(mobile)) {
      setError("شماره معتبر نیست");
      return;
    }

    e.preventDefault();
    if (isPending) return;
    console.log("sending:", mobile);
    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          console.log(data);
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep("otp");
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };
  return (
    <>
      <h2 className={styles.title}>ورود به تورینو</h2>
      <p className={styles.subtitle}>شماره موبایل خود را وارد کنید</p>
      <input
        className={styles.input}
        placeholder="6778***0912"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
          setError("");
        }}
      />

      {error && <p className={styles.error}>{error}</p>}
      <button
        type="submit"
        className={styles.submit}
        onClick={sendOtpHandler}
        disabled={isPending}
      >
        {isPending ? "در حال ارسال..." : "ارسال کد تایید"}
      </button>
    </>
  );
}
