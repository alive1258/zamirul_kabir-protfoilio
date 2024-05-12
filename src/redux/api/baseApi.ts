import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create an API using createApi from Redux Toolkit
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}`,

    // credentials: 'include',
  }),
  endpoints: () => ({}),

  // Define tag types for caching (optional)
  tagTypes: ["projects", "blogs", "educations", "experiences", "skills"],
});
