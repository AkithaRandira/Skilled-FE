import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const sellerPortfolio = () => {
  const router = useRouter();

  return (
    <div className="flex-1 p-10">
      <div className="mb-4 text-center mt-1">
        <h1 className="text-4xl font-bold mb-4">Seller Portfolio</h1>
        <p className="text-gray-700"></p>
      </div>

      <div className="flex cover bg-white-100 p-5 mb-4">
  <Image src="/Login.jpg" alt="Cover Image" layout="responsive" width={2000} height={500} />
</div>







        
<div className="bg-white p-6 rounded-lg shadow-md mb-8 mx-auto max-w-2xl flex items-center">
  {/* Profile Image */}
  <img
    src="/12.png"  
    alt="Profile Image"
    className="w-80 h-80 rounded-full mr-4"
  />

  <div>
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4 text-[#1E3A8A]">About Me</h1>
    </div>
    <p className="text-gray-700 leading-7">
      Hi there! I'm passionate about creating digital experiences that captivate and inspire.
    </p>
    <p className="text-gray-700 leading-7 mt-4">
      With a blend of creativity and technical expertise, I bring ideas to life in the digital realm.
      My journey involves constant learning, exploring new technologies, and staying updated with industry trends.
    </p>
    <p className="text-gray-700 leading-7 mt-4">
      I believe in the power of collaboration and strive to create solutions that not only meet but exceed expectations.
    </p>
  </div>
</div>



      

      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {/* Box 1 */}
        <div className="flex items-center justify-center bg-sky-100 p-10 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">WordPress Developer</h3>
            <p className="text-sm text-gray-600">Description 1</p>
            <button
              className="border text-md font-semibold px-3 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-md mt-4"
              type="button"
              onClick={() => router.push("/seller/skill1")}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex items-center justify-center bg-sky-100 p-10 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">UI/UX Expert</h3>
            <p className="text-sm text-gray-600">Description 2</p>
            <button
              className="border text-md font-semibold px-3 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-md mt-4"
              type="button"
              onClick={() => router.push("/seller/skill2")}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex items-center justify-center bg-sky-100 p-10 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Content Writer</h3>
            <p className="text-sm text-gray-600">Description 2</p>
            <button
              className="border text-md font-semibold px-3 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-md mt-4"
              type="button"
              onClick={() => router.push("/seller/skill2")}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex items-center justify-center bg-sky-100 p-10 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Social Media Manager</h3>
            <p className="text-sm text-gray-600">Description 2</p>
            <button
              className="border text-md font-semibold px-3 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-md mt-4"
              type="button"
              onClick={() => router.push("/seller/skill2")}
            >
              View Details
            </button>
          </div>
        </div>
        </div>
        <div className="text-center mt-8">
        <div className="text-center mt-8">
          
  <button
    className="border text-md font-semibold px-5 py-3 bg-sky-500 hover:bg-sky-400 text-white rounded-md mx-auto block"
    type="button"
    onClick={() => router.push("/seller/cv")}
  >
    View My CV
  </button>
</div>

</div>




        
      </div>
    
  );
};

export default sellerPortfolio;
