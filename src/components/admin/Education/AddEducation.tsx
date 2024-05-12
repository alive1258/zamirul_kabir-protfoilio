"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateEducationsMutation } from "@/redux/features/educationsApi";

interface Inputs {
  date: string;
  name: string;
  description: string;
  certificate: string;
}

const AddEducation = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>(); // Correct import and usage of useForm

  const [createEducation, { isLoading, error }] = useCreateEducationsMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...........</div>;
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await createEducation(data);
      if ("error" in res) {
        console.error("Error during Register:", res.error);
      } else {
        if (res?.data?.acknowledged) {
          toast.success("Education created successfully!");
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
          <h1>Add Education</h1>
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
            <label className="mb-1">certificate</label>
            <input
              {...register("certificate", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.certificate && (
              <span className="text-red-500">certificate is required</span>
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

export default AddEducation;
