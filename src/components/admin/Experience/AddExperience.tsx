"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateExperiencesMutation } from "@/redux/features/experienceApi";

interface Inputs {
  date: string;
  title: string;
  description: string;
  company: string;
}

const AddExperience = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>(); // Correct import and usage of useForm

  const [createExperience, { isLoading, error }] =
    useCreateExperiencesMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...........</div>;
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await createExperience(data);
      if ("error" in res) {
        console.error("Error during Register:", res.error);
      } else {
        if (res?.data?.acknowledged) {
          toast.success("Experience created successfully!");
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
          <h1>Add Experience</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-xl p-5 rounded-lg mt-3 dark:bg-slate-900"
        >
          {/* Input field for name nad image */}

          <div className="flex flex-col mb-3">
            <label className="mb-1">date</label>
            <input
              {...register("date", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.date && (
              <span className="text-red-500">date is required</span>
            )}
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">title</label>
            <input
              {...register("title", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.title && (
              <span className="text-red-500">title is required</span>
            )}
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">company</label>
            <input
              {...register("company", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.company && (
              <span className="text-red-500">company is required</span>
            )}
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1">description</label>
            <input
              {...register("description", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.description && (
              <span className="text-red-500">description is required</span>
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

export default AddExperience;
