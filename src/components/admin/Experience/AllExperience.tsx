"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";

import Image from "next/image";
import ExperienceModal from "./ExperienceModal";
import {
  useDeleteExperiencesMutation,
  useGetExperiencesQuery,
} from "@/redux/features/experienceApi";

const AllExperience = () => {
  const { data, error, isLoading } = useGetExperiencesQuery("");
  const [deleteExperience] = useDeleteExperiencesMutation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editExperienceById, setEditExperienceById] = useState<string | null>(
    null
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...........</div>;
  }

  const handleDelete = async (_id: string) => {
    try {
      const res = await deleteExperience(_id).unwrap();
      if (res?._id) {
        toast.success("Skill deleted successfully!!!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="md:mt-10  mt-9 md:px-8">
        <div className="md:flex justify-between items-center">
          <div className=" md:text-3xl text-2xl font-bold ">
            All Experiences
          </div>
          {/* Link to add new event item */}
          <div>
            <Link href="/dashboard/admin/add-experience">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Add-Experience
              </button>
            </Link>
          </div>
        </div>
        {/* Event items table */}
        <div className="pt-3 ">
          <table className="table-auto border-collapse border border-gray-300  w-full">
            <thead className="overflow-x-scroll">
              <tr className="border border-gray-300 ">
                <th className="border border-gray-300 ">index</th>
                <th className="border border-gray-300 ">date</th>
                <th className="border border-gray-300 ">title</th>
                <th className="border border-gray-300 ">company</th>

                <th className="border border-gray-300">action</th>
              </tr>
            </thead>
            <tbody className="overflow-x-scroll">
              {/* Render each event item */}
              {data?.map((item: any, index: number) => (
                <tr key={item._id} className="border border-gray-300">
                  <td className="border border-gray-300 text-center px-2">
                    {index + 1}
                  </td>

                  <td className="border border-gray-300 px-2">{item?.date}</td>
                  <td className="border border-gray-300 px-2">{item?.title}</td>
                  <td className="border border-gray-300 px-2">
                    {item?.company}
                  </td>

                  {/* Buttons for editing and deleting an event item */}
                  <td className="border border-gray-300 px-3">
                    <div className="flex justify-between items-center gap-4 p-1">
                      <div>
                        <button onClick={() => handleDelete(item?._id)}>
                          <MdDelete className="text-red-700 text-[20px]" />
                        </button>
                      </div>
                      <div>
                        {/* Button to edit an event item */}
                        <button
                          onClick={() => {
                            // e.stopPropagation()
                            setEditExperienceById(item?._id);
                            handleShowModal();
                          }}
                        >
                          <FaEdit className="text-blue-700 text-[20px]" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* modal  */}
      {showModal && (
        <ExperienceModal
          onClose={() => {
            setShowModal(false);
          }}
          ExperienceId={editExperienceById}
        />
      )}
    </>
  );
};

export default AllExperience;
