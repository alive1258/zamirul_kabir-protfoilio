"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  useGetSingleSkillsQuery,
  useUpdateSkillsMutation,
} from "@/redux/features/skillsApi";

type Inputs = {
  name: string;
  image: string;
};

const SkillModal = ({
  onClose,
  skillId,
}: {
  onClose: () => void;
  skillId: string | null;
}) => {
  const { data, isLoading, error } = useGetSingleSkillsQuery(skillId ?? "");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [updateSkill] = useUpdateSkillsMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await updateSkill({
        id: skillId || "",
        body: data,
      });
      if ("error" in res) {
        // Handle error
        console.error("Error updating product:", res.error);
      } else {
        // Handle success
        if (res?.data?.acknowledged) {
          toast.success("Skill Updated successfully!");
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
                Update Skill
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
                <label className="mb-1 text-slate-400 text-lg">name</label>
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
              <div className="flex flex-col mb-3">
                <label className="mb-1 text-slate-400 text-lg">image</label>
                <input
                  defaultValue={data?.image || ""}
                  {...register("image", { required: true })}
                  type="text"
                  className="border border-gray-400 dark:bg-slate-900 rounded-md px-3 py-2"
                />
                {errors.image && (
                  <span className="text-red-500">image is required</span>
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

export default SkillModal;
