"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateBlogsMutation } from "@/redux/features/blogsApi";

interface Inputs {
  name: string;
  image: string;
  rating: number;
  review: number;
}

const AddBlog = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>(); // Correct import and usage of useForm

  const [createBlog, { isLoading, error }] = useCreateBlogsMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...........</div>;
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await createBlog(data);
      if ("error" in res) {
        console.error("Error during Register:", res.error);
      } else {
        if (res?.data?.acknowledged) {
          toast.success("Blog created successfully!");
          reset();
        } else {
          console.error("Invalid response:", res);
        }
      }
    } catch (error) {
      console.error("Error during Product created:", error);
    }
  };

  return (
    <>
      <div className="w-[400px] mx-auto">
        <div className="text-2xl font-bold text-center mt-14">
          <h1>Add Blog</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-xl p-5 rounded-lg mt-3 dark:bg-slate-900"
        >
          {/* Input field for name nad image */}

          <div className="flex flex-col mb-3">
            <label className="mb-1">image</label>
            <input
              {...register("image", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.image && (
              <span className="text-red-500">image is required</span>
            )}
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.name && (
              <span className="text-red-500">name is required</span>
            )}
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">rating</label>
            <input
              {...register("rating", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.rating && (
              <span className="text-red-500">rating is required</span>
            )}
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1">review</label>
            <input
              {...register("review", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.review && (
              <span className="text-red-500">review is required</span>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-[#023e8a] text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
