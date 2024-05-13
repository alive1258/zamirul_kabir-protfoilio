// "use client";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { useCreateBlogsMutation } from "@/redux/features/blogsApi";

// interface Inputs {
//   name: string;
//   image: string;
//   rating: number;
//   review: number;
// }

// const AddBlog = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<Inputs>(); // Correct import and usage of useForm

//   const [createBlog, { isLoading, error }] = useCreateBlogsMutation();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error...........</div>;
//   }

//   const onSubmit: SubmitHandler<Inputs> = async (data) => {
//     try {
//       const res = await createBlog(data);
//       if ("error" in res) {
//         console.error("Error during Register:", res.error);
//       } else {
//         if (res?.data?.acknowledged) {
//           toast.success("Blog created successfully!");
//           reset();
//         } else {
//           console.error("Invalid response:", res);
//         }
//       }
//     } catch (error) {
//       console.error("Error during Product created:", error);
//     }
//   };

//   return (
//     <>
//       <div className="w-[400px] mx-auto">
//         <div className="text-2xl font-bold text-center mt-14">
//           <h1>Add Blog</h1>
//         </div>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="shadow-xl p-5 rounded-lg mt-3 dark:bg-slate-900"
//         >
//           {/* Input field for name nad image */}

//           <div className="flex flex-col mb-3">
//             <label className="mb-1">image</label>
//             <input
//               {...register("image", { required: true })}
//               type="text"
//               className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
//             ></input>
//             {errors.image && (
//               <span className="text-red-500">image is required</span>
//             )}
//           </div>
//           <div className="flex flex-col mb-3">
//             <label className="mb-1">name</label>
//             <input
//               {...register("name", { required: true })}
//               type="text"
//               className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
//             ></input>
//             {errors.name && (
//               <span className="text-red-500">name is required</span>
//             )}
//           </div>
//           <div className="flex flex-col mb-3">
//             <label className="mb-1">rating</label>
//             <input
//               {...register("rating", { required: true })}
//               type="text"
//               className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
//             ></input>
//             {errors.rating && (
//               <span className="text-red-500">rating is required</span>
//             )}
//           </div>

//           <div className="flex flex-col mb-3">
//             <label className="mb-1">review</label>
//             <input
//               {...register("review", { required: true })}
//               type="text"
//               className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
//             ></input>
//             {errors.review && (
//               <span className="text-red-500">review is required</span>
//             )}
//           </div>

//           {/* Submit button */}
//           <button
//             type="submit"
//             className="bg-[#023e8a] text-white px-4 py-2 rounded-lg"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddBlog;

"use client";
import React, { useState, useRef, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateBlogsMutation } from "@/redux/features/blogsApi";
import JoditEditor from "jodit-react";

interface Inputs {
  name: string;
  image: string;
  rating: number;
  review: number;
  content?: string; // Make content optional
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  Des1: string;
  Des2: string;
  Des3: string;
  Des4: string;
  Des5: string;
}

const AddBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [createBlog, { isLoading, error }] = useCreateBlogsMutation();

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
    }),
    []
  );

  const handleEditorBlur = (newContent: string) => {
    setContent(newContent);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // const res = await createBlog({ ...data, content });
      const { content, ...blogData } = data;
      const res = await createBlog(blogData);
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...........</div>;
  }

  return (
    <>
      <div className="">
        <div className="text-2xl font-bold text-center mt-14">
          <h1>Add Blog</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-xl p-5 rounded-lg mt-3 dark:bg-slate-900"
        >
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
          <div className="flex flex-col mb-3">
            <label className="mb-1">Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">Rating</label>
            <input
              {...register("rating", { required: true })}
              type="number"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            />
            {errors.rating && (
              <span className="text-red-500">Rating is required</span>
            )}
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">Review</label>
            <input
              {...register("review", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            />
            {errors.review && (
              <span className="text-red-500">Review is required</span>
            )}
          </div>
          {/* title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  Des1: string;
  Des2: string;
  Des3: string;
  Des4: string;
  Des5: string; */}
          <div className="flex flex-col mb-3">
            <label className="mb-1">title1</label>
            <input
              {...register("title1")}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">Des1</label>
            <input
              {...register("Des1")}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1">title2</label>
            <input
              {...register("title2")}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">Des2</label>
            <input
              {...register("Des2")}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1">title3</label>
            <input
              {...register("title3")}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">Des3</label>
            <input
              {...register("Des3")}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1">title4</label>
            <input
              {...register("title4")}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">Des4</label>
            <input
              {...register("Des4")}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1">title5</label>
            <input
              {...register("title5")}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">Des5</label>
            <input
              {...register("Des5")}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1">Content</label>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              className="text-gray-900"
              onBlur={handleEditorBlur}
            />
          </div>
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
