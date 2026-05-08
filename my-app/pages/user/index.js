import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/ProfileLayout.module.css";
import AuthProvider from "../../components/partials/providers/AuthProvider";

function ProfileLayout({ children }) {
  const router = useRouter();

  return (
    <AuthProvider>
      <div className={styles.container}>
        {/* سایدبار */}
        <div className={styles.sidebar}>
          <Link href="/user/profile">
            <div
              className={
                router.pathname === "/user/profile"
                  ? styles.active
                  : styles.item
              }
            >
              <span>
         <img src="/images/profile.png" />پروفایل
              </span>
              <span className={styles.icon}></span>
            </div>
          </Link>

          <Link href="/user/my-tours">
            <div
              className={
                router.pathname === "/user/my-tours"
                  ? styles.active
                  : styles.item
              }
            >
              <span><img src="/images/14.png"/>تورهای من
               
              </span>
              
            </div>
          </Link>

          <Link href="/user/transactions">
            <div
              className={
                router.pathname === "/user/transactions"
                  ? styles.active
                  : styles.item
              }
            >
              <span><img src="/images/15.png"/>تراکنش ها</span>
              
            </div>
          </Link>
        </div>

        {/* محتوا */}
        <div className={styles.content}>{children}</div>
      </div>
    </AuthProvider>
  );
}

export default ProfileLayout;
