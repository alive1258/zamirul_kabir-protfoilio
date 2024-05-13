import React, { useEffect, useState } from "react";
import { MyBlogs } from "./Blog";
import Image from "next/image";

interface MyBlogsCardProps {
  onClose: () => void;
  blogId: string | null;
}

const BlogDetailsModal: React.FC<MyBlogsCardProps> = ({ onClose, blogId }) => {
  const [singleBlog, setSingleBlog] = useState<MyBlogs | null>(null);

  useEffect(() => {
    // Fetch project details when component mounts
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/blogs/${blogId}`
        );
        const data = await response.json();
        setSingleBlog(data);
      } catch (error) {
        console.error("Error fetching Blogs details:", error);
      }
    };

    if (blogId) {
      fetchBlogDetails();
    }
  }, [blogId]);

  return (
    <div role="dialog" aria-modal="true">
      <section className="fixed left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
        <div className="absolute md:w-6/12 w-3/4 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg pl-2 text-center text-slate-400 my-2">
              Blog Details
            </h3>
            <button onClick={onClose} className="text-white">
              Close
            </button>
          </div>

          {singleBlog ? (
            <>
              <div className="h-[500px] overflow-y-scroll px-4">
                <Image
                  className="w-full "
                  height={200}
                  width={700}
                  src={singleBlog?.image}
                  alt=""
                />

                <div className="pt-5">
                  <p className="text-3xl"> {singleBlog?.name}</p>

                  <div className="pt-5">
                    <p>Review: {singleBlog?.review}</p>
                    <p>Rating: {singleBlog?.rating}</p>
                  </div>

                  <div className="pt-5">
                    <h1 className="text-3xl pb-4">Introduction</h1>
                    <div className="space-y-2 pt-4">
                      <p> {singleBlog?.introduction}</p>
                    </div>
                    <h1 className="text-3xl py-4">Content</h1>
                    <div className="space-y-2 pt-4">
                      <p className="text-3xl"> {singleBlog?.content}</p>
                      <p> {singleBlog?.Des1}</p>
                    </div>
                    <h1 className="text-3xl py-4">Details</h1>
                    <div className="space-y-2 pt-4">
                      <p className="text-3xl"> {singleBlog?.title1}</p>
                      <p> {singleBlog?.Des1}</p>
                    </div>

                    <div className="space-y-2 pt-4">
                      <p className="text-3xl"> {singleBlog?.title2}</p>
                      <p> {singleBlog?.Des2}</p>
                    </div>

                    <div className="space-y-2 pt-4">
                      <p className="text-3xl"> {singleBlog?.title3}</p>
                      <p> {singleBlog?.Des3}</p>
                    </div>
                    <div className="space-y-2 pt-4">
                      <p className="text-3xl"> {singleBlog?.title4}</p>
                      <p> {singleBlog?.Des4}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Render other project details */}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogDetailsModal;
