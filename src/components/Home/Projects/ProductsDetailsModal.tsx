import React, { useEffect, useState } from "react";
import { MyProjects } from "./Projects";
import Image from "next/image";

interface ProductsDetailsModalProps {
  onClose: () => void;
  productId: string | null;
}

const ProductsDetailsModal: React.FC<ProductsDetailsModalProps> = ({
  onClose,
  productId,
}) => {
  const [singleProject, setSingleProject] = useState<MyProjects | null>(null);

  useEffect(() => {
    // Fetch project details when component mounts
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/projects/${productId}`
        );
        const data = await response.json();
        setSingleProject(data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    if (productId) {
      fetchProjectDetails();
    }
  }, [productId]);

  return (
    <div role="dialog" aria-modal="true">
      <section className="fixed left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
        <div className="absolute md:w-6/12 w-3/4 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg pl-2 text-center text-slate-400 my-2">
              Project Details
            </h3>
            <button onClick={onClose} className="text-white">
              Close
            </button>
          </div>

          {singleProject ? (
            <>
              <div className="h-[500px] overflow-y-scroll px-4">
                <Image
                  className="w-full "
                  height={200}
                  width={700}
                  src={singleProject?.image}
                  alt=""
                />
                <div className="pt-5">
                  <p className="text-3xl"> {singleProject?.name}</p>
                  <p className="pt-3"> {singleProject?.category}</p>
                 <div className="pt-5">
                 <p>Review: {singleProject?.review}</p>
                  <p>Rating: {singleProject?.rating}</p>
                 </div>
               
                 <div className="pt-5">
                  <h1 className="text-3xl pb-4">Technology Uses</h1>
<div className="space-y-2">
<p> {singleProject?.tec1}</p>
                  <p> {singleProject?.tec2}</p>
                  <p> {singleProject?.tec3}</p>
                  <p> {singleProject?.tec4}</p>
                  <p> {singleProject?.tec5}</p>
                  <p> {singleProject?.tec6}</p>
                  <p> {singleProject?.tec7}</p>
                  <p> {singleProject?.tec8}</p>
</div>
               
                 </div>
                 <div className="pt-5">
                 <h1 className="text-3xl pb-4">Description</h1>
                 <p className="pt-3"> {singleProject?.Des1}</p>
                  <p className="pt-3"> {singleProject?.Des2}</p>
                  <p className="pt-3"> {singleProject?.Des3}</p>
                  <p className="pt-3"> {singleProject?.Des4}</p>
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

export default ProductsDetailsModal;
