"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  useGetSingleEducationsQuery,
  useUpdateEducationsMutation,
} from "@/redux/features/educationsApi";

type Inputs = {
  date: string;
  name: string;
  description: string;
  certificate: string;
};

const EducationModal = ({
  onClose,
  EducationId,
}: {
  onClose: () => void;
  EducationId: string | null;
}) => {
  const { data, isLoading, error } = useGetSingleEducationsQuery(
    EducationId ?? ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [updateEducation] = useUpdateEducationsMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await updateEducation({
        id: EducationId || "",
        body: data,
      });
      if ("error" in res) {
        // Handle error
        console.error("Error updating product:", res.error);
      } else {
        // Handle success
        if (res?.data?.acknowledged) {
          toast.success("Education Updated successfully!");
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
                Update Education
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
                  defaultValue={data?.name || ""}
                  {...register("name", { required: true })}
                  type="text"
                  className="border border-gray-400 dark:bg-slate-900 rounded-md px-3 py-2"
                />
                {errors.name && (
                  <span className="text-red-500">name is required</span>
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
              {/* certificate */}
              <div className="flex flex-col mb-3">
                <label className="mb-1 text-slate-400 text-lg">
                  certificate
                </label>
                <input
                  defaultValue={data?.certificate || ""}
                  {...register("certificate", { required: true })}
                  type="text"
                  className="border border-gray-400 dark:bg-slate-900 rounded-md px-3 py-2"
                />
                {errors.certificate && (
                  <span className="text-red-500">certificate is required</span>
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

export default EducationModal;
