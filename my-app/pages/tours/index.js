export default function ToursPage({ tours }) {
  return (
    <div>
     {Array.isArray(tours) &&
  tours.map((t) => (
    <div key={t.id}>
      {t.origin?.namefa} → {t.destination?.namefa}
    </div>
  ))
}
    </div>
  );
}
export async function getServerSideProps(context) {
  const { origin, destination, date } = context.query;

  const query = new URLSearchParams({
    origin: origin || "",
    destination: destination || "",
    date: date || "",
  });

  const res = await fetch(`http://localhost:3000/api/tours/search?${query}`);
  const data = await res.json();

  return {
    props: {
      tours: data || [],
    },
  };
}
