import { baseApi } from "../api/baseApi";

// Define the shape of the response data for product-related endpoints
interface BlogsResponse {
  _id: string;
  name: string;
  image: string;
  introduction: string;
  rating: number;
  review: number;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  Des1: string;
  Des2: string;
  Des3: string;
  Des4: string;
  Des5: string;
  acknowledged: boolean;
}

// Define product-related API endpoints using `baseApi.injectEndpoints`
export const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Define a query to fetch all products
    getBlogs: builder.query<BlogsResponse[], string>({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      providesTags: ["blogs"], // Cache tag for this endpoint
    }),

    // Define a query to fetch a single Blogs by ID
    getSingleBlogs: builder.query<BlogsResponse, string>({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
    }),

    // Define a mutation to create a new Blogs
    createBlogs: builder.mutation<BlogsResponse, Partial<BlogsResponse>>({
      query: (body) => ({
        url: "/blogs",
        method: "POST",
        body,
      }),
      invalidatesTags: ["blogs"], // Invalidate product cache after creating a new Blogs
    }),

    // Define a mutation to update an existing Blogs
    updateBlogs: builder.mutation<
      BlogsResponse,
      { id: string; body: Partial<BlogsResponse> }
    >({
      query: ({ id, body }) => ({
        url: `/blogs/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["blogs"],
    }),

    // Define a mutation to delete a Blogs by ID
    deleteBlogs: builder.mutation<BlogsResponse, string>({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogs"],
    }),
  }),
});

// Destructure hooks generated by the `productApi` for easy use
export const {
  useGetBlogsQuery,
  useCreateBlogsMutation,
  useDeleteBlogsMutation,
  useUpdateBlogsMutation,
  useGetSingleBlogsQuery,
} = blogsApi;
