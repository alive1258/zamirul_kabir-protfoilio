import React from "react";
import BlogCard from "./BlogCard";

export interface MyBlogs {
  _id: string;
  name: string;
  image: string;
  introduction: string;
  content?: string;
  rating: string;
  review: string;
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
export interface MyBlogsCardProps {
  item: MyBlogs;
  idx: number;
  delay: number;
}

const Blog = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/blogs`, {
    next: {
      revalidate: 30,
    },
  });
  const data: MyBlogs[] = await res.json();
  return (
    <>
      <div id="blog" className="overflow-hidden relative  text-[#ffffff]">
        {/* Experience */}
        {/* BLURRED BLUE CIRCLE */}
        <div className="absolute md:block hidden blurred-blue-circle"></div>
        <div
          className="absolute rounded-full opacity-40 blur-[150px] bg-[#d946ef]"
          // 952fe9
          style={{
            width: "593.727px",
            height: "531.226px",
            right: "-72.727px",
            top: "-345.17px",
          }}
        ></div>

        {/* Blurred Effect - Blue Circle */}
        <div
          className="absolute rounded-full opacity-[0.38] blur-[125px] bg-[#5158DA]"
          style={{
            width: "699.729px",
            height: "626.07px",
            left: "152.271px",
            bottom: "-377.762px",
          }}
        ></div>
        <div className="absolute md:block hidden bottom-gradient-line"></div>

        <div className="container my-28">
          <div className="md:text-4xl text-2xl font-semibold justify-center item-center flex space-x-2">
            <span>My</span>
            <span className="text-[#34a578]">Blogs</span>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
            {data?.slice(0, 3)?.map((blog: MyBlogs, idx) => (
              <BlogCard
                item={blog}
                key={blog._id}
                idx={idx}
                delay={idx * 0.3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
