// import Link from "next/link";
// import React from "react";
// import AuthProvider from "../../components/partials/providers/AuthProvider";

// function ProfileLayout({ children }) {
//   return (
//     <AuthProvider>
//     <div style={{ display: "flex", gap: "30px", padding: "50px" }}>
//       <ul
//         style={{
//           border: "1px solid silver",
//           borderRadius: "10px",
//           padding: "10px",
//         }}
//       >
//         <li>
//           <Link href="/user/profile">پروفایل من</Link>
//         </li>
//         <li>
//           <Link href="/user/my-tours">تورهای من</Link>
//         </li>
//         <li>
//           <Link href="/user/transactions">تراکنش ها</Link>
//         </li>
//       </ul>
//       <div>{children}</div>
//     </div>
//     </AuthProvider>
//   );
// }

// export default ProfileLayout;
// import Link from "next/link";
// import { useRouter } from "next/router";
// import styles from "../../styles/ProfileLayout.module.css"
// import AuthProvider from "../../components/partials/providers/AuthProvider";

// function ProfileLayout({ children }) {
//   const router = useRouter();

//   return (
//     <AuthProvider>
//       <div className={styles.container}>
//         {/* سایدبار */}
//         <div className={styles.sidebar}>
//           <Link href="/user/profile">
//             <div
//               className={
//                 router.pathname === "/user/profile"
//                   ? styles.active
//                   : styles.item
//               }
//             >
//               پروفایل
//             </div>
//           </Link>

//           <Link href="/user/my-tours">
//             <div
//               className={
//                 router.pathname === "/user/my-tours"
//                   ? styles.active
//                   : styles.item
//               }
//             >
//               تور های من
//             </div>
//           </Link>

//           <Link href="/user/transactions">
//             <div
//               className={
//                 router.pathname === "/user/transactions"
//                   ? styles.active
//                   : styles.item
//               }
//             >
//               تراکنش ها
//             </div>
//           </Link>
//         </div>

//         {/* محتوا */}
//         <div className={styles.content}>{children}</div>
//       </div>
//     </AuthProvider>
//   );
// }

// export default ProfileLayout;
