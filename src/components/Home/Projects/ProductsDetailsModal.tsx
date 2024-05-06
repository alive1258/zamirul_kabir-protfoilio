import React, { useEffect, useState } from "react";

interface ProductsDetailsModalProps {
  onClose: () => void;
  productId: string | null;
}

const ProductsDetailsModal: React.FC<ProductsDetailsModalProps> = ({
  onClose,
  productId,
}) => {
  const [singleProject, setSingleProject] = useState(null);

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
            <h3 className="font-bold text-lg pl-2 text-slate-400 my-2">
              Update Supplies Product
            </h3>
            <button onClick={onClose} className="text-white">
              Close
            </button>
          </div>
          {singleProject ? (
            <>
              <p>Project Name: {singleProject.name}</p>
              <p>Project Category: {singleProject.category}</p>
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
