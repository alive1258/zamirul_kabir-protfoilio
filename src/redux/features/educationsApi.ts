import { baseApi } from "../api/baseApi";

// Define the shape of the response data for product-related endpoints
interface EducationsResponse {
  _id: string;
  date: string;
  name: string;
  description: string;
  certificate: number;
  acknowledged: boolean;
}

// Define product-related API endpoints using `baseApi.injectEndpoints`
export const educationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Define a query to fetch all Educations
    getEducations: builder.query<EducationsResponse[], string>({
      query: () => ({
        url: "/educations",
        method: "GET",
      }),
      providesTags: ["educations"], // Cache tag for this endpoint
    }),

    // Define a query to fetch a single Educations by ID
    getSingleEducations: builder.query<EducationsResponse, string>({
      query: (id) => ({
        url: `/educations/${id}`,
        method: "GET",
      }),
    }),

    // Define a mutation to create a new Educations
    createEducations: builder.mutation<
      EducationsResponse,
      Partial<EducationsResponse>
    >({
      query: (body) => ({
        url: "/educations",
        method: "POST",
        body,
      }),
      invalidatesTags: ["educations"], // Invalidate product cache after creating a new Blogs
    }),

    // Define a mutation to update an existing Educations
    updateEducations: builder.mutation<
      EducationsResponse,
      { id: string; body: Partial<EducationsResponse> }
    >({
      query: ({ id, body }) => ({
        url: `/educations/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["educations"],
    }),

    // Define a mutation to delete a Educations by ID
    deleteEducations: builder.mutation<EducationsResponse, string>({
      query: (id) => ({
        url: `/educations/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["educations"],
    }),
  }),
});

// Destructure hooks generated by the `EducationsApi` for easy use
export const {
  useGetEducationsQuery,
  useCreateEducationsMutation,
  useDeleteEducationsMutation,
  useUpdateEducationsMutation,
  useGetSingleEducationsQuery,
} = educationsApi;