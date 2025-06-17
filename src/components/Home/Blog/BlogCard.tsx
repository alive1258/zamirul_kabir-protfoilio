"use client";
import React, { useState } from "react";
import { MyBlogsCardProps } from "./Blog";
import Image from "next/image";
import BlogDetailsModal from "./BlogDetailsModal";
import { FaGithub } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import SlideUp from "@/components/Shared/animations/SlideUp";

const BlogCard: React.FC<MyBlogsCardProps> = ({ item, delay = 0 }) => {
  const [showModal, setShowModal] = useState(false);
  const [blogId, setBlogId] = useState<string | null>(null);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <SlideUp delay={delay}>
        <div className="box">
          <Image
            className="rounded-t-md w-full h-[200px]"
            height={200}
            width={500}
            src={item?.image}
            alt=""
          />

          <div className="px-5">
            <h1 className="text-2xl pt-3">{item?.name}</h1>
            <div className="flex justify-between pt-3">
              <p className="text-[#34a578]">Rating : {item?.rating}</p>
              <p className=" text-[#34a578]">Review : {item?.review}</p>
            </div>

            <div className="flex justify-center items-center pt-6 pb-5">
              <button
                className="glow-button"
                onClick={() => {
                  setBlogId(item?._id);
                  handleShowModal();
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </SlideUp>
      {showModal && blogId !== null && (
        <BlogDetailsModal
          onClose={() => {
            setShowModal(false);
          }}
          blogId={blogId}
        />
      )}
    </>
  );
};

export default BlogCard;
