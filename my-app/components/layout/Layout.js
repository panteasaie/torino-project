import React from "react";
import styles from "./Layout.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import LoginModal from "../auth/LoginModal";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/router";
import Footer from "./Footer/Footer";

function Layout({ children,showLogo = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [userPhone, setUserPhone] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const router=useRouter()
  useEffect(() => {
    const phone = localStorage.getItem("mobile");
    if (phone) {
      setUserPhone(phone);
    }
  }, []);
  const clickhandler=()=>{
    router.push("/user")
  }
  return (
    <>
    <header className={styles.header}>
  <div className={styles.hamburger} onClick={() => setMobileMenu(true)}>
  ☰
</div>
      <div className={styles.container}>
        <div className={styles.logo}>
          {showLogo && <img src="/images/torino.png" />}
        </div>

        <nav className={styles.nav}>
          <Link href="/">صفحه اصلی</Link>
          <Link href="/services">خدمات گردشگری</Link>
          <Link href="/about">درباره ما</Link>
          <Link href="/contact">تماس با ما</Link>
        </nav>
{mobileMenu && (
  <div className={styles.mobileMenu}>
    <Link href="/" onClick={() => setMobileMenu(false)}>صفحه اصلی</Link>
    <Link href="/services" onClick={() => setMobileMenu(false)}>خدمات گردشگری</Link>
    <Link href="/about" onClick={() => setMobileMenu(false)}>درباره ما</Link>
    <Link href="/contact" onClick={() => setMobileMenu(false)}>تماس با ما</Link>
  </div>
)}
        {userPhone ? (
          <div className={styles.userBox}>
            <div onClick={() => setOpenMenu(!openMenu)}>
              <img src="/images/profile.png" className={styles.profile} />
              {userPhone}
              <FiChevronDown />
            </div>

            {openMenu && (
              <div className={styles.dropdown}>
                <span onClick={clickhandler}>
                  <div className={styles.userInfo}>
                    <img
                      src={"/images/loginprofile.png"}
                      className={styles.profile}
                    />
                    {userPhone}
                  </div>
                  
                  <img src="/images/profile.png" className={styles.profile} />
                  اطلاعات حساب کاربری
                </span>

                <span className={styles.loggout}
                  onClick={() => {
                    localStorage.removeItem("mobile");
                    setUserPhone(null);
                  }}
                >
                  <img src="/images/logout.png" className={styles.profile} />
                  خروج از حساب کاربری
                </span>
              </div>
            )}
          </div>
        ) : (
          <button className={styles.loginBtn} onClick={() => setIsOpen(true)}>
            <img src="/images/profile.png" className={styles.profile} />
            ورود | ثبت نام
          </button>
        )}
        {isOpen && (
          <LoginModal
            onClose={() => setIsOpen(false)}
            setIsOpen={setIsOpen}
            setUserPhone={setUserPhone}
          />
        )}
      </div>
      {mobileMenu && (
  <div className={styles.overlay} onClick={() => setMobileMenu(false)}>
    
    <div className={styles.sideMenu} onClick={(e) => e.stopPropagation()}>
      
      <Link href="/" onClick={() => setMobileMenu(false)}>
        صفحه اصلی
      </Link>

      <Link href="/services" onClick={() => setMobileMenu(false)}>
        خدمات گردشگری
      </Link>

      <Link href="/about" onClick={() => setMobileMenu(false)}>
        درباره ما
      </Link>

      <Link href="/contact" onClick={() => setMobileMenu(false)}>
        تماس با ما
      </Link>

    </div>

  </div>
)}
    </header>
    <main>{children}</main>
    <Footer/>
    </>
  );
}

export default Layout;
