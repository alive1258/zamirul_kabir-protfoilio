"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateProjectsMutation } from "@/redux/features/projectsApi";
import { toast } from "sonner";

interface Inputs {
  name: string;
  image: string;

  rating: number;
  review: number;
  category: string;
  live_link: string;
  gitHub_link: string;
  gitHub_link_server: string;
  video_showcasing: string;
  tec1: string;
  tec2: string;
  tec3: string;
  tec4: string;
  tec5: string;
  tec6: string;
  tec7: string;
  tec8: string;
  Des1: string;
  Des2: string;
  Des3: string;
  Des4: string;
}

const AddProject = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>(); // Correct import and usage of useForm

  const [createProduct, { isLoading, error }] = useCreateProjectsMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...........</div>;
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await createProduct(data);
      if ("error" in res) {
        console.error("Error during Register:", res.error);
      } else {
        if (res?.data?.acknowledged) {
          toast.success("Project created successfully!");
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
          <h1>Add Product</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-xl p-5 rounded-lg mt-3 dark:bg-slate-900"
        >
          {/* Input field for name nad image */}
          <div className="flex space-x-3">
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
          </div>
          {/* Input field for rating nad review */}
          <div className="flex space-x-3">
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
          </div>
          {/* Input field for live_link nad category */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">category</label>
              <input
                {...register("category", { required: true })}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
              {errors.category && (
                <span className="text-red-500">category is required</span>
              )}
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">live_link</label>
              <input
                {...register("live_link", { required: true })}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
              {errors.live_link && (
                <span className="text-red-500">live_link is required</span>
              )}
            </div>
          </div>
          {/* Input field for gitHub_link nad gitHub_link_server */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">gitHub_link</label>
              <input
                {...register("gitHub_link", { required: true })}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
              {errors.gitHub_link && (
                <span className="text-red-500">gitHub_link is required</span>
              )}
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">gitHub_link_server</label>
              <input
                {...register("gitHub_link_server")}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
          </div>
          {/* Input field for video_showcasing nad tec1 */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">video_showcasing</label>
              <input
                {...register("video_showcasing")}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">tec1</label>
              <input
                {...register("tec1", { required: true })}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
          </div>
          {/* Input field for tec2 nad tec3 */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">tec2</label>
              <input
                {...register("tec2")}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">tec3</label>
              <input
                {...register("tec3", { required: true })}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
          </div>
          {/* Input field for tec4 nad tec5 */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">tec4</label>
              <input
                {...register("tec4")}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">tec5</label>
              <input
                {...register("tec5", { required: true })}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
          </div>
          {/* Input field for tec6 nad tec7 */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">tec6</label>
              <input
                {...register("tec6")}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">tec7</label>
              <input
                {...register("tec7", { required: true })}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
          </div>
          {/* Input field for tec8 nad Des1 */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">tec8</label>
              <input
                {...register("tec8")}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">Des1</label>
              <input
                {...register("Des1", { required: true })}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
          </div>
          {/* Input field for Des2 nad Des3 */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">Des2</label>
              <input
                {...register("Des2")}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">Des3</label>
              <input
                {...register("Des3", { required: true })}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1">Des4</label>
            <input
              {...register("Des4", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
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

export default AddProject;
