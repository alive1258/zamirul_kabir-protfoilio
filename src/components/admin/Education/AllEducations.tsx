"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";

import Image from "next/image";
import EducationModal from "./EducationModal";

import {
  useGetEducationsQuery,
  useDeleteEducationsMutation,
} from "@/redux/features/educationsApi";

const AllEducations = () => {
  const { data, error, isLoading } = useGetEducationsQuery("");
  const [deleteEducation] = useDeleteEducationsMutation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editEducationById, setEditEducationById] = useState<string | null>(
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
      const res = await deleteEducation(_id).unwrap();
      if (res?._id) {
        toast.success("Education deleted successfully!!!");
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
          <div className=" md:text-3xl text-2xl font-bold ">All Education</div>
          {/* Link to add new event item */}
          <div>
            <Link href="/dashboard/admin/add-education">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Add-Education
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
                <th className="border border-gray-300 ">name</th>
                <th className="border border-gray-300 ">certificate</th>

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
                  <td className="border border-gray-300 px-2">{item?.name}</td>
                  <td className="border border-gray-300 px-2">
                    {item?.certificate}
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
                            setEditEducationById(item?._id);
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
        <EducationModal
          onClose={() => {
            setShowModal(false);
          }}
          EducationId={editEducationById}
        />
      )}
    </>
  );
};

export default AllEducations;
