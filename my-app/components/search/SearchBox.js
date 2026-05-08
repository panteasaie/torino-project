import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchBox({ tours }) {
  const router = useRouter();

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  // استخراج مبداها
  const origins = [
    ...new Set((tours || []).map((item) => item.origin?.name)),
  ];

  // استخراج مقصدها
  const destinations = [
    ...new Set((tours || []).map((item) => item.destination?.name)),
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
    <div style={{ display: "flex", gap: "10px" }}>
      
      {/* مبدا */}
      <select onChange={(e) => setOrigin(e.target.value)}>
        <option value="">مبدا</option>
        {origins.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* مقصد */}
      <select onChange={(e) => setDestination(e.target.value)}>
        <option value="">مقصد</option>
        {destinations.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* تاریخ */}
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      {/* دکمه */}
      <button onClick={searchHandler}>جستجو</button>
    </div>
  );
}