import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowRight } from 'lucide-react';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";

import { FaEnvelope } from "react-icons/fa";

const NewsDetail = ({ newsData }) => {
  const { id } = useParams();
  const newsItem = newsData.find(item => item.id === parseInt(id));

  if (!newsItem) {
    return <div>News item not found</div>;
  }


  const ArticleCard = ({ image, categories, title, link }) => (
    <div className="bg-white text-left shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" style={{boxShadow:"1px 17px 40px 0 "}}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {categories.map((category, index) => (
            <span key={index} className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
              {category}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <a
          href={link}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          Read More
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
  
  const articles = [
    {
      image: "https://trustuscotton.org/wp-content/uploads/2024/07/Website-Header-1024x576.png",
      categories: ["Featured", "Growers", "News"],
      title: "Trust Protocol Grower Enrollment Climbs for Fifth Straight Year",
      link: "#"
    },
    {
      image: "https://trustuscotton.org/wp-content/uploads/2024/06/Carhartt-website-graphic.png",
      categories: ["Featured", "News"],
      title: "Carhartt, Inc. Joins U.S. Cotton Trust Protocol As Part Of Its Strategy To Source More Responsibly Grown Cotton",
      link: "#"
    },
    {
      image: "https://trustuscotton.org/wp-content/uploads/2024/06/Website-header-graphic-1024x576.png",
      categories: ["Announcements", "Growers", "News"],
      title: "U.S. Cotton Trust Protocol Growers Can Now Apply for the Level 2 Climate Smart Cotton Program",
      link: "#"
    }
  ];

  return (
    <>
      <Navbar />
      <div className=" mx-3 mt-20 px-4 py-14 bg-blue-900 text-white text-left rounded">
        <div className='space-y-6' style={{padding:"0 12%"}}>
      <h1 className="text-5xl font-bold text-white mb-4 ">{newsItem.title}</h1>
       <div className='d-flex space-x-3'>
      <FaFacebook style={{backgroundColor:"#3b5998",padding:"12px" , width:"40px", height:"40px"}}/>
      <FaTwitter style={{padding:"12px" , width:"40px", height:"40px",backgroundColor:"#1da1g1"}} />
      <FaLinkedin style={{backgroundColor:"#0077b5",padding:"12px" , width:"40px", height:"40px"}}/>
      <FaEnvelope style={{backgroundColor:"#ea4335",padding:"12px" , width:"40px", height:"40px"}}/>
      
      
      </div>

        <img src={newsItem.image} alt={newsItem.title} className="w-full h-full object-cover rounded-lg mb-8" />
      
      <div>
        <li className='pl-8'>2.1 million planted acres enrolled for the 2024 crop year, up 31% from 2023.</li>
        <li className='pl-8'>Grower enrollment increases 35% from the previous year.</li>
        <li className='pl-8'>Continued expansion for fifth consecutive year.</li>
        </div>
       <p>MEMPHIS, TENN (July 24, 2024) – The U.S. Cotton Trust Protocol announced today continued program expansion for the fifth consecutive year – both in enrolled growers and planted acres. Planted cotton acres enrolled increased to 2.1 million acres, up 31% from 2023. This growth is driven by a 35% increase in enrolled growers, demonstrating a strong commitment to sustainability within the cotton industry.</p>
       <p>“We are proud to see steady increase in grower enrollment for the Trust Protocol for a fifth consecutive year, reflecting a continued commitment to sustainability within the cotton industry,” said Daren Abney, U.S. Cotton Trust Protocol Executive Director. “It is a collective effort that brings more responsibly produced cotton into the market, providing brands and retailers with greater access to sustainable sourcing options.”</p>
       <p>With the increase of 35%, enrollment for 2024 now totals 1,327 growers participating in the Trust Protocol. Enrolled acres for the 2023 crop year resulted in a yield of 1.9. million bales of cotton. The expanded acreage for 2024 will further enhance the availability of sustainable cotton in the market. </p>
       <p>“We look forward to supporting our brand and retailer members in their increased uptake of Trust Protocol Cotton and driving value back to our growers,” said Abney.</p>
       <p>The Climate Smart Cotton Program also made strides towards its goal of enrolling at least 1,650 farming entities, including 330 from the historically underserved communities. In 2024, 1,340 Trust Protocol farming entities applied for Level 1 of the Climate Smart Cotton Program with 282 from historically underserved communities. These farming entities represent 444,000 acres. </p>
       <p>Growers who are participating in Level 1 of the Climate Smart Cotton Program can now also apply for participation in Level 2. This provides the opportunity to receive additional financial risk-share for implementing Climate Smart Practices Changes into their operations that will allow for improved soil health, increased drought and flood resilience, and reduced greenhouse gas emissions.</p>
       <p>The Trust Protocol’s core values include a commitment to U.S. cotton’s legacy of authenticity, innovation and excellence, environmental stewardship, caring of people, and personal and corporate integrity.  The program currently has more than 2,000 supplier members and over 40 companies and their brands including Ralph Lauren, Gap Inc., Levi Strauss & Co., Carhartt and J. Crew. </p>
       <p>To learn more about the Trust Protocol and how to become a member, visit TrustUSCotton.org. </p>
       <h4>About the U.S. Cotton Trust Protocol</h4>
       <p>The U.S. Cotton Trust Protocol is the voluntary sustainability program for U.S. cotton growers and traceability platform for all U.S. cotton. It is the only system that provides quantifiable, verifiable goals and measurement and drives continuous improvement in six key sustainability metrics – land use, soil carbon, water measurement, soil loss, greenhouse gas emissions, and energy efficiency. It is also the world’s first sustainable cotton fiber program to offer article-level supply chain transparency to all members.</p>
       <p>The Trust Protocol is also proud to lead the U.S. Climate Smart Cotton Program, a 5-year, collaborative initiative that presents a transformative opportunity for cotton growers to enhance their profitability, operations, and environmental stewardship, all while contributing to the long-term viability of the U.S. cotton industry. </p>
       <p>Media Contact:   <br/>
Jayci Bishop <br/>
jayci.bishop@hillandknowlton.com  <br/>
+1 (214) 613-0396 </p>
      
       <p>Visit us online at: TrustUSCotton.org  </p>
       <p>Follow us at:   </p>
       <p>https://twitter.com/trustuscotton   <br/>
https://www.facebook.com/trustuscotton/   <br/>
https://www.instagram.com/trustuscotton/   <br/>
https://www.linkedin.com/company/responsibleuscotton/   </p>
      </div>
      </div>


      <section className=" news-events-container py-12 mx-3">
      <div className="mx-10 ">
        <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8 justify-content-between">
          <div className="flex flex-col items-start pt-16">
            <h2 className="text-5xl font-bold whitespace-nowrap  pb-12 pr-9 text-blue-900">News & Events</h2>
            <a
              href=""
              className="inline-flex text-blue-900 no-underline font-bold"
            >
              See All News & Events
              <ArrowRight className="pl-2 h-7 w-7 " />
            </a>
          </div>
       
          <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
};

export default NewsDetail;
