// "use client";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { toast } from "sonner";
// import {
//   useGetSingleProjectsQuery,
//   useUpdateProjectsMutation,
// } from "@/redux/features/projectsApi";

// type Inputs = {
//   name: string;
//   image: string;
//   category: string;
//   tec1: string;
//   tec2: string;
//   tec3: string;
//   rating: number;
//   review: number;
//   live_link: string;
//   gitHub_link: string;
//   gitHub_link_server: string;
// };

// const ProjectModal = ({
//   onClose,
//   projectId,
// }: {
//   onClose: () => void;
//   projectId: string | null;
// }) => {
//   const { data, isLoading, error } = useGetSingleProjectsQuery(projectId ?? "");
//   console.log(data, "data sig project");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const [updateProduct] = useUpdateProjectsMutation();

//   const onSubmit: SubmitHandler<Inputs> = async (data) => {
//     try {
//       const res = await updateProduct({
//         id: projectId || "",
//         body: data,
//       });
//       if ("error" in res) {
//         // Handle error
//         console.error("Error updating product:", res.error);
//       } else {
//         // Handle success
//         if (res?.data?.acknowledged) {
//           toast.success("Project Updated successfully!");
//           onClose();
//         } else {
//           // Handle invalid response
//           console.error("Invalid response:", res);
//         }
//       }
//     } catch (error) {
//       // Handle network errors or other exceptions
//       console.error("Error updating Project:", error);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error......</div>;
//   }

//   return (
//     <>
//       <div role="dialog" aria-modal="true">
//         <section className="fixed left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
//           <div className="absolute md:w-6/12 w-3/4 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
//             <div className="flex justify-between items-center">
//               <h3 className="font-bold text-lg pl-2 text-slate-400 my-2">
//                 Update Project
//               </h3>
//               <button onClick={onClose} className="text-white">
//                 Close
//               </button>
//             </div>

//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="shadow-xl p-5 rounded-lg"
//             >
//               {/* Input fields for the form */}
//               <div className="flex flex-col mb-3">
//                 <label className="mb-1 text-slate-400 text-lg">name</label>
//                 <input
//                   defaultValue={data?.name || ""}
//                   {...register("name", { required: true })}
//                   type="text"
//                   className="border border-gray-400 dark:bg-slate-900 rounded-md px-3 py-2"
//                 />
//                 {errors.name && (
//                   <span className="text-red-500">name is required</span>
//                 )}
//               </div>
//               <div className="flex flex-col mb-3">
//                 <label className="mb-1">image</label>
//                 <input
//                   defaultValue={data?.image || ""}
//                   {...register("image", { required: true })}
//                   type="text"
//                   className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
//                 ></input>
//                 {errors.image && (
//                   <span className="text-red-500">image is required</span>
//                 )}
//               </div>
//               {/* Input field for live_link nad category */}
//               <div className="flex space-x-3">
//                 <div className="flex flex-col mb-3">
//                   <label className="mb-1">live_link</label>

//                   <input
//                     defaultValue={data?.live_link || ""}
//                     {...register("live_link", { required: true })}
//                     type="text"
//                     className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
//                   ></input>
//                   {errors.live_link && (
//                     <span className="text-red-500">live_link is required</span>
//                   )}
//                 </div>
//               </div>
//               {/* Input field for gitHub_link nad gitHub_link_server */}
//               <div className="flex space-x-3">
//                 <div className="flex flex-col mb-3">
//                   <label className="mb-1">gitHub_link</label>

//                   <input
//                     defaultValue={data?.gitHub_link || ""}
//                     {...register("gitHub_link", { required: true })}
//                     type="text"
//                     className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
//                   ></input>
//                   {errors.gitHub_link && (
//                     <span className="text-red-500">
//                       gitHub_link is required
//                     </span>
//                   )}
//                 </div>
//                 <div className="flex flex-col mb-3">
//                   <label className="mb-1">gitHub_link_server</label>

//                   <input
//                     defaultValue={data?.gitHub_link_server || ""}
//                     {...register("gitHub_link_server")}
//                     type="text"
//                     className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
//                   ></input>
//                 </div>
//               </div>
//               <div className="flex flex-col mb-3">
//                 <label className="mb-1 text-slate-400 text-lg">Category</label>
//                 <input
//                   defaultValue={data?.category || ""}
//                   {...register("category", { required: true })}
//                   type="text"
//                   className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
//                 />
//                 {errors.category && (
//                   <span className="text-red-500">Category is required</span>
//                 )}
//               </div>
//               <div className="flex flex-col mb-3">
//                 <label className="mb-1 text-slate-400 text-lg">Tech1</label>
//                 <input
//                   defaultValue={data?.tec1?.toString() || ""}
//                   {...register("tec1", { required: true })}
//                   type="text"
//                   className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
//                 />
//                 {errors.tec1 && (
//                   <span className="text-red-500">Tech1 is required</span>
//                 )}
//               </div>
//               <div className="flex flex-col mb-3">
//                 <label className="mb-1 text-slate-400 text-lg">Tech2</label>
//                 <input
//                   defaultValue={data?.tec2?.toString() || ""}
//                   {...register("tec2", { required: true })}
//                   type="text"
//                   className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
//                 />
//                 {errors.tec2 && (
//                   <span className="text-red-500">Tech2 is required</span>
//                 )}
//               </div>
//               <div className="flex flex-col mb-3">
//                 <label className="mb-1 text-slate-400 text-lg">Tech3</label>
//                 <input
//                   defaultValue={data?.tec3?.toString() || ""}
//                   {...register("tec2", { required: true })}
//                   type="text"
//                   className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
//                 />
//                 {errors.tec3 && (
//                   <span className="text-red-500">Tech3 is required</span>
//                 )}
//               </div>
//               <div className="flex flex-col mb-3">
//                 <label className="mb-1 text-slate-400 text-lg">rating</label>
//                 <input
//                   defaultValue={data?.rating?.toString() || ""}
//                   {...register("rating", { required: true })}
//                   type="text"
//                   className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
//                 />
//                 {errors.rating && (
//                   <span className="text-red-500">rating is required</span>
//                 )}
//               </div>
//               <div className="flex flex-col mb-3">
//                 <label className="mb-1 text-slate-400 text-lg">review</label>
//                 <input
//                   defaultValue={data?.review?.toString() || ""}
//                   {...register("review", { required: true })}
//                   type="text"
//                   className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
//                 />
//                 {errors.review && (
//                   <span className="text-red-500">review is required</span>
//                 )}
//               </div>

//               {/* Submit button */}
//               <button
//                 type="submit"
//                 className="bg-[#023e8a] text-white px-4 py-2 rounded-lg"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default ProjectModal;

"use client";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  useGetSingleProjectsQuery,
  useUpdateProjectsMutation,
} from "@/redux/features/projectsApi";

type Inputs = {
  name: string;
  image: string;
  category: string;
  tec1: string;
  tec2: string;
  tec3: string;
  rating: number;
  review: number;
  live_link: string;
  gitHub_link: string;
  gitHub_link_server: string;
};

const ProjectModal = ({
  onClose,
  projectId,
}: {
  onClose: () => void;
  projectId: string | null;
}) => {
  const { data, isLoading, error } = useGetSingleProjectsQuery(projectId ?? "");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const [updateProduct] = useUpdateProjectsMutation();

  useEffect(() => {
    if (data) {
      reset({
        name: data.name || "",
        image: data.image || "",
        category: data.category || "",
        tec1: data.tec1 || "",
        tec2: data.tec2 || "",
        tec3: data.tec3 || "",
        rating: data.rating || 0,
        review: data.review || 0,
        live_link: data.live_link || "",
        gitHub_link: data.gitHub_link || "",
        gitHub_link_server: data.gitHub_link_server || "",
      });
    }
  }, [data, reset]);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      const res = await updateProduct({
        id: projectId || "",
        body: formData,
      });

      if ("error" in res) {
        console.error("Error updating product:", res.error);
      } else {
        if (res?.data?.acknowledged) {
          toast.success("Project updated successfully!");
          onClose();
        } else {
          console.error("Invalid response:", res);
        }
      }
    } catch (error) {
      console.error("Error updating Project:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading project data.</div>;

  return (
    <div role="dialog" aria-modal="true">
      <section className="fixed left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
        <div className="absolute md:w-6/12 w-3/4 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg pl-2 text-slate-400 my-2">
              Update Project
            </h3>
            <button onClick={onClose} className="text-white">
              Close
            </button>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="shadow-xl p-5 rounded-lg"
          >
            {/* Name */}
            <div className="flex flex-col mb-3">
              <label className="mb-1 text-slate-400 text-lg">Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="border border-gray-400 dark:bg-slate-900 rounded-md px-3 py-2"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>

            {/* Image */}
            <div className="flex flex-col mb-3">
              <label className="mb-1">Image</label>
              <input
                {...register("image", { required: true })}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              />
              {errors.image && (
                <span className="text-red-500">Image is required</span>
              )}
            </div>

            {/* Live Link */}
            <div className="flex flex-col mb-3">
              <label className="mb-1">Live Link</label>
              <input
                {...register("live_link", { required: true })}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              />
              {errors.live_link && (
                <span className="text-red-500">Live link is required</span>
              )}
            </div>

            {/* GitHub Links */}
            <div className="flex space-x-3">
              <div className="flex flex-col mb-3 w-full">
                <label className="mb-1">GitHub Link</label>
                <input
                  {...register("gitHub_link", { required: true })}
                  type="text"
                  className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                />
                {errors.gitHub_link && (
                  <span className="text-red-500">GitHub link is required</span>
                )}
              </div>
              <div className="flex flex-col mb-3 w-full">
                <label className="mb-1">GitHub Link (Server)</label>
                <input
                  {...register("gitHub_link_server")}
                  type="text"
                  className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                />
              </div>
            </div>

            {/* Category */}
            <div className="flex flex-col mb-3">
              <label className="mb-1 text-slate-400 text-lg">Category</label>
              <input
                {...register("category", { required: true })}
                type="text"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              />
              {errors.category && (
                <span className="text-red-500">Category is required</span>
              )}
            </div>

            {/* Tech Fields */}
            {["tec1", "tec2", "tec3"].map((tech, index) => (
              <div className="flex flex-col mb-3" key={tech}>
                <label className="mb-1 text-slate-400 text-lg">{`Tech${
                  index + 1
                }`}</label>
                <input
                  {...register(tech as keyof Inputs, { required: true })}
                  type="text"
                  className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                />
                {errors[tech as keyof Inputs] && (
                  <span className="text-red-500">{`Tech${
                    index + 1
                  } is required`}</span>
                )}
              </div>
            ))}

            {/* Rating */}
            <div className="flex flex-col mb-3">
              <label className="mb-1 text-slate-400 text-lg">Rating</label>
              <input
                {...register("rating", { required: true })}
                type="number"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              />
              {errors.rating && (
                <span className="text-red-500">Rating is required</span>
              )}
            </div>

            {/* Review */}
            <div className="flex flex-col mb-3">
              <label className="mb-1 text-slate-400 text-lg">Review</label>
              <input
                {...register("review", { required: true })}
                type="number"
                className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              />
              {errors.review && (
                <span className="text-red-500">Review is required</span>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#023e8a] text-white px-4 py-2 rounded-lg mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ProjectModal;
