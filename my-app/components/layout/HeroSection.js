import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./HeroSection.module.css";
import { FaGlobe} from "react-icons/fa";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
export default function HeroSection({ onSelect, tours }) {
  const router = useRouter();

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const cityMap = {
  Tehran: "تهران",
  Sanandaj: "سنندج",
  Madrid: "مادرید",
  Isfahan: "اصفهان",
  Mazandaran: "مازندران",
  Italy: "ایتالیا",
  Hewler:"هولر",
  Sulaymaniyah:"سلیمانیه",
  Offroad:"آفرود"
};
 const origins = [
  ...new Set(
    (tours || [])
.map((item) => cityMap[item.origin?.name] || item.origin?.name)
      .filter(Boolean)
  ),
];

  const [openOrigin, setOpenOrigin] = useState(false);
  const [searchOrigin, setSearchOrigin] = useState("");
  const [openDestination, setOpenDestination] = useState(false);
  const [searchDestination, setSearchDestination] = useState("");

 const destinations = [
  ...new Set(
    (tours || [])
     .map((item) => cityMap[item.destination?.name] || item.destination?.name)
      .filter(Boolean)
  ),
];
  const searchHandler = () => {
    router.push({
      pathname: "/tours",
      query: {
        origin,
        destination,
        date,
      },
    });
  };
  
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <img src="/images/tour.png " className={styles.tour} />
        <h1>
          <span className={styles.brand}>تورینو</span> برگزار کننده بهترین تور
          های داخلی و خارجی
        </h1>

        <div className={styles.searchBox}>
          <div className={styles.field}>
            <img src="/images/12.png" />
            <input
              placeholder="مبدا"
              value={origin}
              onFocus={() => setOpenOrigin(true)}
              onChange={(e) => {
                setOrigin(e.target.value);
                setSearchOrigin(e.target.value);
              }}
            />

            {openOrigin && (
              <div className={styles.menu}>
                {origins
                  .filter((o) => o?.includes(searchOrigin))
                  .map((o, i) => (
                    <div
                      key={i}
                      className={styles.item}
                      onClick={() => {
                        setOrigin(o);
                        setOpenOrigin(false);
                        setSearchOrigin("");
                      }}
                    >
                      <img src="/images/12.png" />
                      {o}
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className={styles.field}>
            <FaGlobe className={styles.icon} />

            <input
              placeholder="مقصد"
              value={destination}
              onFocus={() => setOpenDestination(true)}
              onChange={(e) => {
                setDestination(e.target.value);
                setSearchDestination(e.target.value);
              }}
            />

            {openDestination && (
              <div className={styles.menu}>
                {destinations
                .filter((d) =>
  d?.toLowerCase().includes(searchDestination.toLowerCase())
)
                  .map((d, i) => (
                    <div
                      key={i}
                      className={styles.item}
                      onClick={() => {
                        setDestination(d);
                        setOpenDestination(false);
                        setSearchDestination("");
                      }}
                    >
                      <img src="/images/12.png" />
                      {d}
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className={styles.field}>
            <img src="/images/global-search.png" />
            <DatePicker
              value={date}
              onChange={(value) => {
                setDate(value?.format("YYYY-MM-DD")); // برای API
              }}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              inputClass={styles.input}
              placeholder="تاریخ"
            />
          </div>
          <button onClick={searchHandler}>جستجو</button>
        </div>
      </div>
    </section>
  );
}
