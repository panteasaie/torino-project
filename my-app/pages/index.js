import { cache } from "react";
import HomePage from "../components/templates/HomePage";
import { serverFetch } from "../core/services/http";
import TourSection from "../components/sections/TourSection/TourSection";
import HeroSection from "../components/layout/HeroSection";

// export default function Home() {
//   return (
//       <HomePage />
//   )
// }

// export default async function Home() {
//   const data = await serverFetch("/tour",searchParams,{cache:"no-store"})
//   console.log(data)
//   return (
//     <div>
//       <HomePage />
//       <TourSection toursData={data}/>
//     </div>
//   );=
// }

// export default function Home({ tours }) {
//     console.log("PAGE IS RENDERING");
//   return <HomePage toursData={tours} />;
// }
// export async function getServerSideProps(context) {
//   const data = await serverFetch("/tour", context.query);

//   console.log("API DATA:", data);

//   return {
//     props: {
//       tours: data || [],
//     },
//   };
// }
// export async function getServerSideProps(context) {
//   const data = await serverFetch("/tour", context.query);

//   console.log("API DATA:", data);

//   return {
//     props: {
//       tours: data || [],
//     },
//   };
// }
// export default function Home() {
//   console.log("CLIENT RENDER");
//   return <div>test</div>;
// }
// export async function getServerSideProps() {
//   console.log("🔥 SSR IS WORKING");

//   return {
//     props: { tours: [] },
//   };
// }
export default function Home({ tours }) {
  return <><HomePage toursData={tours} />
  
  </>
}

export async function getServerSideProps() {
  const data = await serverFetch("/tour");

  console.log("SSR DATA:", data);

  return {
    props: {
      tours: data || [],
    },
  };
}