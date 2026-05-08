// import Layout from "../components/layout/Layout";
// import TranstackQueryProvider from "../components/partials/providers/TanstackQueryProvider";
// import "../styles/globals.css";

// function MyApp({ Component, pageProps }) {
//   return (
//     <TranstackQueryProvider>
//       <Component {...pageProps} />
//     </TranstackQueryProvider>
//   );
// }
// export default MyApp;
import Layout from "../components/layout/Layout";
import ProfileLayout from "./user/layout";
import TranstackQueryProvider from "../components/partials/providers/TanstackQueryProvider";
import "../styles/globals.css";
import Footer from "../components/layout/Footer/Footer";

// function MyApp({ Component, pageProps, router }) {
//   const isProfile = router.pathname.startsWith("/profile");

//   return (
//     <TranstackQueryProvider>
//       {isProfile ? (
//         <ProfileLayout>
//           <Component {...pageProps} />
//         </ProfileLayout>
//       ) : (
        
//           <Component {...pageProps} />
        
//       )}
//     </TranstackQueryProvider>
//   );
// }

// export default MyApp;
// function MyApp({ Component, pageProps, router }) {
//   const isProfile = router.pathname.startsWith("/profile");

//   return (
//     <TranstackQueryProvider>
//       {isProfile ? (
//         <ProfileLayout>
//           <Component {...pageProps} />
//         </ProfileLayout>
//       ) : (
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
        
//       )}
//     </TranstackQueryProvider>
//   );
// }

// export default MyApp;
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps, router }) {
  const isProfile = router.pathname.startsWith("/profile");

  return (
    <TranstackQueryProvider>
      <Toaster position="top-center" />

      {isProfile ? (
        <ProfileLayout>
          <Component {...pageProps} />
        </ProfileLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </TranstackQueryProvider>
  );
}

export default MyApp;