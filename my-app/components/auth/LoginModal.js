import { useState } from "react";
import styles from "./LoginModal.module.css";
import SendOTPForm from "./sendOTPForm";
import CheckOTPForm from "./CheckOTPForm";

export default function LoginModal({ onClose, setIsOpen, setUserPhone }) {
  const [step, setStep] = useState("phone");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          ×
        </button>

        {step === "phone" && (
          <SendOTPForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            error={error}
            setError={setError}
          />
        )}

        {step === "otp" && (
          <CheckOTPForm
            mobile={mobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
            setUserPhone={setUserPhone}
          />
        )}
      </div>
    </div>
  );
}
