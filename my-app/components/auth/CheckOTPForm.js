import React, { useState } from "react";
import { useCheckOtp } from "../../core/services/mutations";
import styles from "./CheckOTPForm.module.css";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
// import dynamic from "next/dynamic";
// import OtpInput from "react-otp-input";
import OtpInput from "react18-otp-input";
import { setCookie } from "../../core/utils/cookie";
// const OtpInput = dynamic(() => import("react-otp-input"), {
//   ssr: false,
// });

function CheckOTPForm({ mobile, setStep, setIsOpen, setUserPhone }) {
  const [code, setCode] = useState("");
  const { mutate, isPending } = useCheckOtp();
  const router = useRouter();
  const checkOtpHandler = (e) => {
    e.preventDefault();

    if (code.length !== 6) {
      toast.error("کد تایید باید 6 رقمی باشد");
      return;
    }

    if (isPending) return;

    mutate(
      { mobile, code },
      {
        onSuccess: (res) => {
          const data = res?.data || res;

          setCookie("accessToken", data.accessToken, 30);
          setCookie("refreshToken", data.refreshToken, 365);

          setUserPhone(mobile);
          localStorage.setItem("mobile", mobile);

          setIsOpen(false);
          setStep("phone");

          router.push("/");
        },
        onError: (error) => console.log(error),
      },
    );
  };

  return (
    <form onSubmit={checkOtpHandler}>
      <h2 className={styles.title}>کد تایید را وارد کنید</h2>
      <p className={styles.subtitle}>کد ارسال شده را وارد کنید</p>

      {/* <OtpInput
        value={code}
        onChange={setCode}
        numInputs={6}
        renderInput={(props) => (
          <input {...props} className={styles.otpInput} />
        )}
      /> */}
      <OtpInput
        value={code}
        onChange={setCode}
        numInputs={6}
        renderInput={(props) => (
          <input
            {...props}
            className={`${props.className} ${styles.otpInput}`}
          />
        )}
        containerStyle={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          direction: "ltr",
        }}
      />

      <button type="submit" className={styles.submit} disabled={isPending}>
        {isPending ? "در حال بررسی..." : "ورود"}
      </button>
    </form>
  );
}

export default CheckOTPForm;
