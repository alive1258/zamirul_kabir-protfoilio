import React from "react";
import BlogCard from "./BlogCard";

export interface MyBlogs {
  _id: string;
  name: string;
  image: string;
  introduction: string;
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
      <div className="container pt-40 text-[#ffffff]">
        <div className="md:text-4xl text-2xl font-semibold justify-center item-center flex space-x-2">
          <span>My</span>
          <span className="text-[#34a578]">Blogs</span>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-10">
          {data?.slice(0, 3)?.map((blog: MyBlogs) => (
            <BlogCard item={blog} key={blog._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
