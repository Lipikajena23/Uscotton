import React from 'react';
import {  Instagram} from 'lucide-react';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full"  style={{borderTop: "2px solid #ddd"}}>
      <div className="px-9 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="mb-6 md:mb-0">
            <img src="https://trustuscotton.org/wp-content/uploads/2020/08/USCTP_Logo_NoTag_nobrdr.png" alt="U.S. Cotton Trust Protocol Logo" className=" md:h-14 w-auto " />
          </div>
          
          <nav className="mb-6 md:-mb-40 lg:mb-0 ">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <div><a href="#" className="text-blue-900 hover:text-green-500 no-underline font-bold">News & Announcements</a></div>
              <div><a href="#" className="text-blue-900  hover:text-green-500 no-underline font-bold">Consumer</a></div>
              <div><a href="# " className="text-blue-900  hover:text-green-500 no-underline font-bold">Resources</a></div>
              <div><a href="#" className="text-blue-900  hover:text-green-500 no-underline font-bold">FAQs</a></div>
            </div>
          </nav>
          
          <div className="flex space-x-4">
            <a href="#"  className="text-white bg-blue-900 p-2 rounded-full hover:text-gray-600">
              <FaTwitter size={15} />
            </a>
            <a href="#"  rel="noopener noreferrer" className="text-white bg-blue-900 p-2 rounded-full hover:text-gray-600">
              <FaFacebook size={15} />
            </a>
            <a href="#"  className="text-white bg-blue-900 p-2 rounded-full hover:text-gray-600">
              <FaLinkedin size={15} />
            </a>
            <a href="#"  rel="noopener noreferrer" className="text-white bg-blue-900 p-2 rounded-full hover:text-gray-600">
              <Instagram size={15} />
            </a>
            <a href="#"  rel="noopener noreferrer" className="text-white bg-blue-900 p-2 rounded-full hover:text-gray-600">
              <FaYoutube size={15} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500 md:pt-24 lg:pt-0 flex inline-flex space-x-3 sm:flex-col md:flex-row">
          <p className="text-green-500 ">© 2024 USCTP. All rights reserved.</p>
          
            <div  className="pb-3"><a href="#" className="text-green-500 no-underline ">Privacy Policy</a></div>
            <div><a href="#" className="text-green-500 no-underline ">Terms of Service</a></div>
            
       
        </div>
      

      <div className="mt-4 flex justify-center">
          <button className="border border-blue-800 text-blue-800 px-4 py-2 " style={{borderRadius:"5px 0 0 5px"}}>
            Notice at collection
          </button>
          <button className="border border-blue-800 text-blue-800 px-4 py-2 flex items-center" style={{borderRadius:"0 5px 5px 0"}}>
            Your Privacy Choices
            <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="18"
      viewBox="0 0 40 18"
      fill="none"
      className='ml-2'
    >
      {/* Outer Rectangle */}
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="17"
        rx="8.5"
        fill="white"
        stroke="#2569F6"
      />
      
      {/* Blue Background on Right */}
      <path
        d="M22.5 0H31C35.9706 0 40 4.02944 40 9C40 13.9706 35.9706 18 31 18H18L22.5 0Z"
        fill="#2569F6"
      />
      
      {/* Checkmark */}
      <path
        d="M8 9.5L10.5 12L16.5 6"
        stroke="#2569F6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Cross */}
      <path
        d="M25.5 6L31.5 12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M31.5 6L25.5 12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
            
          </button>
        </div>
        </div>
    </footer>
  );
};

export default Footer;