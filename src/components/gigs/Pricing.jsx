import React from "react";
import { FiClock, FiRefreshCcw } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
import { useStateProvider } from "../../context/StateContext";
import { useRouter } from "next/router";
function Pricing() {
  const [{ gigData, userInfo }, dispatch] = useStateProvider();
  const router = useRouter();

  return (
    <>
      {gigData && (
        <div className="sticky top-36 mb-10 h-max w-96 rounded-lg">
          <div className="border p-10 flex flex-col gap-5 rounded-lg bg-sky-100">
            <div className="flex justify-between">
              <h4 className="text-md font-normal text-[#74767e] overflow-hidden overflow-ellipsis max-h-[80px]">
                {gigData.shortDesc}
              </h4>
              
            </div>
              <h6 className="font-medium text-lg">LKR {gigData.price}</h6>
            <div>
              <div className="text-[#62646a] font-semibold text-sm flex gap-6">
                <div className="flex items-center gap-2">
                  <FiClock className="text-xl" />
                  <span>{gigData.deliveryTime} Days Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiRefreshCcw className="text-xl" />
                  <span>{gigData.revisions} Revisions</span>
                </div>
              </div>
              <ul></ul>
            </div>
            <ul className="flex gap-1 flex-col">
              {gigData.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <BsCheckLg className="text-[#1DBF73] text-lg" />
                  <span className="text-[#4f5156]">{feature}</span>
                </li>
              ))}
            </ul>
            {gigData.userId === userInfo.id ? (
              <button
                className="flex items-center bg-sky-500 hover:bg-sky-400 text-white py-2 justify-center font-bold text-lg relative rounded"
                onClick={() => router.push(`/seller/gigs/${gigData.id}`)}
              >
                <span>Edit</span>
                <BiRightArrowAlt className="text-2xl absolute right-4" />
              </button>
            ) : (
              <button
                className="flex items-center bg-sky-500 hover:bg-sky-400 text-white py-2 justify-center font-bold text-lg relative rounded"
                onClick={() => router.push(`/checkout?gigId=${gigData.id}`)}
              >
                <span>Continue</span>
                <BiRightArrowAlt className="text-2xl absolute right-4" />
              </button>
            )}
          </div>
         
        </div>
      )}
    </>
  );
}

export default Pricing;