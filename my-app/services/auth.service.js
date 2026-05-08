// const BASE_URL = "http://localhost:6500";

// export async function sendOtp(mobile) {
//   const res = await fetch(`${BASE_URL}/auth/send-otp`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ mobile }),
//   });

//   const data = await res.json().catch(() => ({}));

//   if (!res.ok) {
//     throw new Error(data?.message || "ارسال کد ناموفق بود");
//   }

//   return data;
// }
