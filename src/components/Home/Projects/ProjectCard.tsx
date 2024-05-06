"use client";
import React, { useState } from "react";
import { MyProjectsCardProps } from "./Projects";
import Image from "next/image";
import ProductsDetailsModal from "./ProductsDetailsModal";

const ProjectCard: React.FC<MyProjectsCardProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState<string | null>(null);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="box p-4">
        <Image height={200} width={400} src={project.image_url} alt="" />
        <h1 className="text-2xl mt-3">{project.name}</h1>
        <p className="mt-2">{project.category}</p>
        <button
          onClick={() => {
            setProductId(project?._id);
            handleShowModal();
          }}
        >
          View Details
        </button>
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


