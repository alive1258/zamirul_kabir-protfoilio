"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  useGetSingleExperiencesQuery,
  useUpdateExperiencesMutation,
} from "@/redux/features/experienceApi";

type Inputs = {
  date: string;
  title: string;
  description: string;
  company: string;
};

const ExperienceModal = ({
  onClose,
  ExperienceId,
}: {
  onClose: () => void;
  ExperienceId: string | null;
}) => {
  const { data, isLoading, error } = useGetSingleExperiencesQuery(
    ExperienceId ?? ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [updateExperience] = useUpdateExperiencesMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await updateExperience({
        id: ExperienceId || "",
        body: data,
      });
      if ("error" in res) {
        // Handle error
        console.error("Error updating product:", res.error);
      } else {
        // Handle success
        if (res?.data?.acknowledged) {
          toast.success("Experience Updated successfully!");
          onClose();
        } else {
          // Handle invalid response
          console.error("Invalid response:", res);
        }
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error updating Project:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error......</div>;
  }

  return (
    <>
      <div role="dialog" aria-modal="true">
        <section className="fixed left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
          <div className="absolute md:w-6/12 w-3/4 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg pl-2 text-slate-400 my-2">
                Update Experience
              </h3>
              <button onClick={onClose} className="text-white">
                Close
              </button>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-xl p-5 rounded-lg"
            >
              {/* Input fields for the form */}
              <div className="flex flex-col mb-3">
                <label className="mb-1 text-slate-400 text-lg">date</label>
                <input
                  defaultValue={data?.date || ""}
                  {...register("date", { required: true })}
                  type="text"
                  className="border border-gray-400 dark:bg-slate-900 rounded-md px-3 py-2"
                />
                {errors.date && (
                  <span className="text-red-500">date is required</span>
                )}
              </div>
              <div className="flex flex-col mb-3">
                <label className="mb-1 text-slate-400 text-lg">image</label>
                <input
                  defaultValue={data?.title || ""}
                  {...register("title", { required: true })}
                  type="text"
                  className="border border-gray-400 dark:bg-slate-900 rounded-md px-3 py-2"
                />
                {errors.title && (
                  <span className="text-red-500">title is required</span>
                )}
              </div>
              {/* company */}
              <div className="flex flex-col mb-3">
                <label className="mb-1 text-slate-400 text-lg">company</label>
                <input
                  defaultValue={data?.company || ""}
                  {...register("company", { required: true })}
                  type="text"
                  className="border border-gray-400 dark:bg-slate-900 rounded-md px-3 py-2"
                />
                {errors.company && (
                  <span className="text-red-500">company is required</span>
                )}
              </div>
              {/* description */}
              <div className="flex flex-col mb-3">
                <label className="mb-1 text-slate-400 text-lg">
                  description
                </label>
                <input
                  defaultValue={data?.description || ""}
                  {...register("description", { required: true })}
                  type="text"
                  className="border border-gray-400 dark:bg-slate-900 rounded-md px-3 py-2"
                />
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
        </section>
      </div>
    </>
  );
};

export default ExperienceModal;
