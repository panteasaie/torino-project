// import QueryString from "qs";
// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// const serverFetch = async (
//   endpoint,
//   query,
//   cache = { cache: "force-cache" },
// ) => {
//   let url = BASE_URL;
//   if (endpoint) url += endpoint;
//   if (query) url += `?${QueryString.stringify(query)}`;
//   console.log(url);
//   try {
//     const res = await fetch(`${url}`, cache);
//     const json = await res.json();
//     return json;
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// };
// export { serverFetch };
import qs from "qs";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const serverFetch = async (endpoint = "", query = {}) => {
  if (!BASE_URL) throw new Error("BASE_URL is not defined");

  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;

  const url = new URL(cleanEndpoint, BASE_URL);

  if (query && Object.keys(query).length) {
    // url.search = qs.stringify(query);
    url.search = qs.stringify(query, { arrayFormat: "repeat" });
  }

  try {
    const res = await fetch(url.toString());
   

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("serverFetch error:", error);
    return null;
  }
};

export { serverFetch };
