"use client";
import React, { useState } from "react";
import { MyProjectsCardProps } from "./Projects";
import Image from "next/image";
import ProductsDetailsModal from "./ProductsDetailsModal";
import { FaGithub } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";

const ProjectCard: React.FC<MyProjectsCardProps> = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState<string | null>(null);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
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
          <p className="pt-2 text-[#34a578]">{item?.category}</p>
          <div className="pt-4 flex justify-between items-center">
            <a
              className="flex border border-[#34a578] p-2 rounded-lg items-center space-x-2"
              href={item?.live_link}
              target="_new"
            >
              <MdRemoveRedEye className="text-xl" />
              <button>Live Link</button>
            </a>
            <a
              className="flex border border-[#34a578] p-2 rounded-lg items-center space-x-2"
              href={item?.gitHub_link}
              target="_new"
            >
              <FaGithub className="text-xl" />
              <button>GitHub Link</button>
            </a>
          </div>
          <div className="flex justify-center items-center pt-6 pb-5">
            <button
              className="btn"
              onClick={() => {
                setProductId(item?._id);
                handleShowModal();
              }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      {showModal && productId !== null && (
        <ProductsDetailsModal
          onClose={() => {
            setShowModal(false);
          }}
          productId={productId}
        />
      )}
    </>
  );
};

export default ProjectCard;
