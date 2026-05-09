// import { useGetUserData } from "../../core/services/queries";

// export default function Profile() {
//   const { data, isLoading } = useGetUserData();

//   if (isLoading) return <p>در حال دریافت اطلاعات...</p>;
//   if (!data) return <p>اطلاعاتی یافت نشد</p>;

//   return (
//     <div>
//       <h2>پروفایل کاربر</h2>

//       <p>نام: {data?.name}</p>
//       <p>موبایل: {data?.mobile}</p>
//       <p>ایمیل: {data?.email}</p>
//     </div>
//   );
// }
// import ProfileDeatails from "../../components/sidebar/ProfileDeatails";
// import { useGetUserData } from "../../core/services/queries";
// import styles from "../../styles/profile.module.css";
// import ProfileLayout from "./layout";
// export default function Profile() {
//   const { data, isLoading } = useGetUserData();

//   if (isLoading) return <p>در حال دریافت اطلاعات...</p>;
//   if (!data) return <p>اطلاعاتی یافت نشد</p>;

//   return (
//     <>
//     <ProfileDeatails>
//     <div className="profile-container">

//       {/* محتوای اصلی */}
//       <div className={styles.profilecontent}>
//         {/* اطلاعات کاربری */}
//         <div className={styles.card}>
//           <div className={styles.cardheader}>
//             <span>اطلاعات حساب کاربری</span>
//             <button>ویرایش اطلاعات</button>
//           </div>

//           <div className={styles.cardbody}>
//             <div className={styles.row}>
//               <p>شماره موبایل</p>
//               <span>{data.mobile}</span>
//             </div>
//             <div className={styles.row}>
//               <p>ایمیل</p>
//               <span>{data.email || "-"}</span>
//             </div>
//           </div>
//         </div>

//         {/* اطلاعات شخصی */}
//         <div className={styles.card}>
//           <div className={styles.cardheader}>
//             <span>اطلاعات شخصی</span>
//             <button>ویرایش اطلاعات</button>
//           </div>

//           <div className={styles.cardbody}>
//             <div className={styles.row}>
//               <p>نام و نام خانوادگی</p>
//               <span>{data.name}</span>
//             </div>
//             <div className={styles.row}>
//               <p>جنسیت</p>
//               <span>زن</span>
//             </div>
//           </div>
//         </div>

//         <div className={styles.card}>
//           <div className={styles.cardheader}>
//             <span>اطلاعات حساب بانکی</span>
//             <button>ویرایش اطلاعات</button>
//           </div>

//           <div className={styles.cardbody}>
//             <div className={styles.row}>
//               <p>شماره کارت</p>
//               <span>-</span>
//             </div>
//             <div className={styles.row}>
//               <p>شماره شبا</p>
//               <span>-</span>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//     </ProfileDeatails>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import ProfileDeatails from "../../components/sidebar/ProfileDeatails";
import { useGetUserData, useUpdateUserData } from "../../core/services/queries";

import styles from "../../styles/profile.module.css";

export default function Profile() {
  const { data, isLoading } = useGetUserData();

  const { mutate, isPending } = useUpdateUserData();

  const [editPersonal, setEditPersonal] = useState(false);
  const [editBank, setEditBank] = useState(false);

  const [bankData, setBankData] = useState({
    cardNumber: "",
    sheba: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    birthDate: "",
    nationalCode: "",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name || "",
        email: data.email || "",
        gender: data.gender || "",
        gender: data.gender || "",
        birthDate: data.birthDate || "",
        nationalCode: data.nationalCode || "",
      });
      setBankData({
        cardNumber: data.cardNumber || "",
        sheba: data.sheba || "",
      });
    }
  }, [data]);

  if (isLoading) return <p>در حال دریافت اطلاعات...</p>;

  if (!data) return <p>اطلاعاتی یافت نشد</p>;

  const submitProfile = () => {
    mutate(formData, {
      onSuccess: () => {
        setEditPersonal(false);
      },
    });
  };

  return (
    <ProfileDeatails>
      <div className={styles.profilecontainer}>
        <div className={styles.profilecontent}>
          <div className={styles.card}>
            <div className={styles.cardheader}>
              <span>اطلاعات حساب کاربری</span>
            </div>

            <div className={styles.cardbody}>
              <div className={styles.row}>
                <p>شماره موبایل</p>
                <span>{data.mobile}</span>
              </div>

              <div className={styles.row}>
                <p>ایمیل</p>

                {!editPersonal ? (
                  <span>{data.email || "-"}</span>
                ) : (
                  <input
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                  />
                )}
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardheader}>
              <span>اطلاعات شخصی</span>

              <button onClick={() => setEditPersonal(!editPersonal)}>
                {editPersonal ? "انصراف" : "ویرایش اطلاعات"}
              </button>
            </div>

            <div className={styles.cardbody}>
              <div className={styles.row}>
                <p>نام و نام خانوادگی</p>

                {!editPersonal ? (
                  <span>{data.name}</span>
                ) : (
                  <input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                  />
                )}
              </div>
              <div className={styles.row}>
                <p>تاریخ تولد</p>
                <span>{data.birthDate || "-"}</span>
              </div>

              <div className={styles.row}>
                <p>کد ملی</p>
                <span>{data.nationalCode || "-"}</span>
              </div>
              <div className={styles.row}>
                <p>جنسیت</p>

                {!editPersonal ? (
                  <span>{data.gender || "-"}</span>
                ) : (
                  <select
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gender: e.target.value,
                      })
                    }
                  >
                    <option value="">انتخاب کنید</option>

                    <option value="male">مرد</option>

                    <option value="female">زن</option>
                  </select>
                )}
              </div>

              {editPersonal && (
                <div className={styles.actions}>
                  <button className={styles.confirm} onClick={submitProfile}>
                    {isPending ? "در حال ثبت..." : "تایید"}
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardheader}>
              <span>اطلاعات حساب بانکی</span>
              {/* <button>ویرایش اطلاعات</button> */}
              <button onClick={() => setEditBank(!editBank)}>
                {editBank ? "انصراف" : "ویرایش اطلاعات"}
              </button>
            </div>
            <div className={styles.cardbody}>
              <div className={styles.row}>
                <div className={styles.row}>
                  <p>شماره کارت</p>

                  {!editBank ? (
                    <span>{data.cardNumber || "-"}</span>
                  ) : (
                    <input
                      value={bankData.cardNumber}
                      onChange={(e) =>
                        setBankData({
                          ...bankData,
                          cardNumber: e.target.value,
                        })
                      }
                    />
                  )}
                </div>
              </div>
              <div className={styles.row}>
                <p>شماره شبا</p> <span>-</span>{" "}
                {!editBank ? (
                  <span>{data.sheba || "-"}</span>
                ) : (
                  <input
                    value={bankData.sheba}
                    onChange={(e) =>
                      setBankData({
                        ...bankData,
                        sheba: e.target.value,
                      })
                    }
                  />
                )}
                {editBank && (
                  <div className={styles.actions}>
                    <button
                      className={styles.confirm}
                      onClick={() => {
                        mutate(bankData, {
                          onSuccess: () => {
                            setEditBank(false);
                          },
                        });
                      }}
                    >
                      {isPending ? "در حال ثبت..." : "تایید"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileDeatails>
  );
}
