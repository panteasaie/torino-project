// import React, { useEffect } from 'react'
// import { useGetUserData } from '../../../core/services/queries'
// import { useRouter } from 'next/router'

// function AuthProvider({children}) {
//     const router=useRouter()
//     const{isPending,data,isError,isFetching}=useGetUserData()
//     useEffect(()=>{
//         if(!isPending && !data?.data)router.push("/")
//     },[isPending])
//     if(isPending) return <p>Loading...</p>
//   return (
//     <div>{children}</div>
//   )
// }

// export default AuthProvider
import { useRouter } from "next/router";
import { useGetUserData } from "../../../core/services/queries";

function AuthProvider({ children }) {
  const router = useRouter();
  const { data, isLoading } = useGetUserData();

  const user = data;

  if (isLoading) return <p>Loading...</p>;

  if (!user) {
    if (typeof window !== "undefined") {
      router.replace("/");
    }
    return null;
  }

  return children;
}

export default AuthProvider;
