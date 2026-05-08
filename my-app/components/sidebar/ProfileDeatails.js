import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/ProfileLayout.module.css";
import AuthProvider from "../partials/providers/AuthProvider";

const menuItems = [
  { href: "/user/profile", label: "پروفایل", icon: "/images/profile.png" },
  { href: "/user/my-tours", label: "تورهای من", icon: "/images/14.png" },
  { href: "/user/transactions", label: "تراکنش‌ها", icon: "/images/15.png" },
];

export default function ProfileDeatails({ children }) {
  const router = useRouter();

  return (
    <AuthProvider>
      <div className={styles.wrapper}>
        
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                router.pathname === item.href
                  ? styles.active
                  : styles.item
              }
            >
              <img src={item.icon} alt={item.label} />
              <span>{item.label}</span>
            </Link>
          ))}
        </aside>

        {/* Content */}
        <main className={styles.content}>
          {children}
        </main>

      </div>
    </AuthProvider>
  );
}