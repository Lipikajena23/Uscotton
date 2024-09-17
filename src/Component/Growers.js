import {useState, useEffect} from 'react';
import './style.css';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';


export const newsData = [
  {
    id:1,
    title: "Sustainability Takes Center Stage at the Textile Exchange Conference",
    date: "November 20, 2023",
    category: "Featured, News",
    image:"https://trustuscotton.org/wp-content/uploads/2024/07/Website-Header.png"
  },
  {
    id:2,
    title: "Total area of enrolled planted cotton acres grows by a further 25%",
    date: "October 25, 2023",
    category: "Announcements, Brands & Retailers, Featured, Growers, News",
    image:"/Announcements.png"
  },
  {
    id:3,
    title: "Trust Protocol Releases Revised Principle and Criteria",
    date: "October 17, 2023",
    category: "Featured, News",
    image:"/trust.png"
  },
  {
    id:4,
    title: "New Sustainable Cotton Initiatives Launched",
    date: "December 5, 2023",
    category: "Initiatives, News",
    image:"https://trustuscotton.org/wp-content/uploads/elementor/thumbs/16x9-climate-smart-q8ji2r9nxkpt3s9z7qfpf3a8jgva7mslw0xasqu658.png"
  },
  {
    id:5,
    title: "Annual Cotton Industry Summit Announced",
    date: "January 10, 2024",
    category: "Events, News",
    image:"https://trustuscotton.org/wp-content/uploads/elementor/thumbs/16x9-climate-smart-q8ji2r9nxkpt3s9z7qfpf3a8jgva7mslw0xasqu658.png"
  },
  {
    id:6,
    title: "Breakthrough in Eco-Friendly Cotton Processing",
    date: "February 2, 2024",
    category: "Innovation, Featured",
    image:"https://trustuscotton.org/wp-content/uploads/elementor/thumbs/16x9-climate-smart-q8ji2r9nxkpt3s9z7qfpf3a8jgva7mslw0xasqu658.png"
  },
  {
    id:7,
    title: "Sustainability Takes Center Stage at the Textile Exchange Conference",
    date: "November 20, 2023",
    category: "Featured, News",
    image:"/1stcontainerimg.png"
  },
  {
    id:8,
    title: "Total area of enrolled planted cotton acres grows by a further 25%",
    date: "October 25, 2023",
    category: "Announcements, Brands & Retailers, Featured, Growers, News",
    image:"/Announcements.png"
  },
  {
    id:9,
    title: "Trust Protocol Releases Revised Principle and Criteria",
    date: "October 17, 2023",
    category: "Featured, News",
    image:"/trust.png"
  },
  {
    id:10,
    title: "New Sustainable Cotton Initiatives Launched",
    date: "December 5, 2023",
    category: "Initiatives, News",
    image:"https://trustuscotton.org/wp-content/uploads/elementor/thumbs/16x9-climate-smart-q8ji2r9nxkpt3s9z7qfpf3a8jgva7mslw0xasqu658.png"
  },
  {
    id:11,
    title: "Annual Cotton Industry Summit Announced",
    date: "January 10, 2024",
    category: "Events, News",
    image:"https://trustuscotton.org/wp-content/uploads/elementor/thumbs/16x9-climate-smart-q8ji2r9nxkpt3s9z7qfpf3a8jgva7mslw0xasqu658.png"
  },
  {
    id:12,
    title: "Breakthrough in Eco-Friendly Cotton Processing",
    date: "February 2, 2024",
    category: "Innovation, Featured",
    image:"https://trustuscotton.org/wp-content/uploads/elementor/thumbs/16x9-climate-smart-q8ji2r9nxkpt3s9z7qfpf3a8jgva7mslw0xasqu658.png"
  },
  {
    id:13,
    title: "Sustainability Takes Center Stage at the Textile Exchange Conference",
    date: "November 20, 2023",
    category: "Featured, News",
    image:"/1stcontainerimg.png"
  },
  {
    id:14,
    title: "Total area of enrolled planted cotton acres grows by a further 25%",
    date: "October 25, 2023",
    category: "Announcements, Brands & Retailers, Featured, Growers, News",
    image:"/Announcements.png"
  },
  {
    id:15,
    title: "Trust Protocol Releases Revised Principle and Criteria",
    date: "October 17, 2023",
    category: "Featured, News",
    image:"/trust.png"
  },
  {
    id:16,
    title: "New Sustainable Cotton Initiatives Launched",
    date: "December 5, 2023",
    category: "Initiatives, News",
    image:"https://trustuscotton.org/wp-content/uploads/elementor/thumbs/16x9-climate-smart-q8ji2r9nxkpt3s9z7qfpf3a8jgva7mslw0xasqu658.png"
  },
  {
    id:17,
    title: "Annual Cotton Industry Summit Announced",
    date: "January 10, 2024",
    category: "Events, News",
    image:"https://trustuscotton.org/wp-content/uploads/elementor/thumbs/16x9-climate-smart-q8ji2r9nxkpt3s9z7qfpf3a8jgva7mslw0xasqu658.png"
  },
  {
    id:18,
    title: "Breakthrough in Eco-Friendly Cotton Processing",
    date: "February 2, 2024",
    category: "Innovation, Featured",
    image:"https://trustuscotton.org/wp-content/uploads/elementor/thumbs/16x9-climate-smart-q8ji2r9nxkpt3s9z7qfpf3a8jgva7mslw0xasqu658.png"
  }
];

const Growers = () => {

  const NewsContainer = ({ title, date, category, image, id }) => (
    <motion.div className="bg-white rounded-lg shadow-lg pb-4 mb-4 lg:mb-0 text-left relative custom-shadow"
      initial={{ y: 0 }}
      whileHover={{ y: -15 }}
      transition={{ stiffness: 500 }} >
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
      <div className="text-sm text-green-500 mb-2 px-6">{category}</div>
      <h2 className="text-xl font-bold text-blue-900 mb-2 px-6">{title}</h2>
      <p className="text-sm text-green-500 mb-4 px-6">Posted {date}</p>
      <div className="px-6">
        <Link to={`/news/${id}`} className="text-blue-900 font-semibold no-underline inline-flex items-center group">
          Read More
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20" 
            fill="currentColor"
            whileHover={{ x: 8 }}
            transition={{  stiffness: 400, damping: 15 }}
          >
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </motion.svg>
        </Link>
      </div>
    </motion.div>
  );
  const [currentPage, setCurrentPage] = useState(1);

 

  const itemsPerPage = 12;
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const displayedNews = newsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
     <Navbar/>
    <div className="relative min-h-screen bg-white rounded-xl pt-14 overflow-hidden ">
     

      {/* Main content */}
      <main className="relative">
        {/* Blue background section */}
        <div className=" relative bg-blue-900 m-3 overflow-hidden " style={{padding:"8rem 12%"}} >

          <div className='heading text-left text-5xl font-bold pb-2 '>News</div>
          <div className='heading text-left text-5xl font-bold pb-3'>& Announcements</div>
          <div className='custom-text text-left pb-3'>Stay updated about the Trust Protocol and sustainable cotton  production in the U.S. find all past press releases and announcements below.</div>
          <div className='heading text-left font-bold pb-4'>Filter for...</div>
            {/* Navigation buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Growers', 'Brands & Retailers', 'Mills & Manufacturers', 'Merchants & Cooperatives', 'Events', 'Resources'].map((item) => (
                <motion.button
                  key={item}
                  className="bg-white text-blue-900 px-4 py-2 rounded shadow hover:bg-blue-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <div className="absolute bottom-0  dotted-circle hidden lg:block" style={{ transform: `translateY(${scrollPosition * 0.2}px)`, top: "200px", right: "-40px" }}>
    <svg className="w-30 h-30" viewBox="0 0 100 100">
      <circle
        cx="60"
        cy="61"
        r="60"
        fill="none"
        stroke="white"
        strokeWidth="0.5"
        strokeDasharray="1.5,1"
        className="animate-spin-slow"
      />
    </svg>
  </div>

  <div className="fixed line-circle hidden lg:block" style={{ transform: `translateY(${scrollPosition * 0.3}px)`, top: "-10px", right: "320px" }}>
  <svg className="w-60 h-60" viewBox="0 0 200 200">
    <circle
      cx="100"
      cy="100"
      r="98"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeDasharray="4,2"
      className="animate-spin-slow"
    />
  </svg>
</div>


        </div>

        {/* Overlapping white section */}
        <div className=" rounded-t-3xl -mt-8 md:-mt-24 relative z-10 " style={{marginLeft:"5%",marginRight:"5%"}}>
         





            <div className=" py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
        {displayedNews.map((news, index) => (
          <NewsContainer key={index} {...news} id={news.id}/>
        ))}
      </div>

      
      <div className="flex justify-center space-x-2">
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-1 border border-blue-900 text-blue-900 rounded hover:bg-blue-100 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          « Previous
        </button>
        {[1, 2].map((num) => (
          <button 
            key={num}
            onClick={() => handlePageChange(num)}
            className={`px-3 py-1 border ${
              num === currentPage ? 'bg-blue-900 text-white' : 'border-blue-900 text-blue-900'
            } rounded hover:bg-blue-100`}
          >
            {num}
          </button>
        ))}
        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-1 border border-blue-900 text-blue-900 rounded hover:bg-blue-100 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next »
        </button>
      </div>
    </div>
        
        </div>
      </main>



      <div className=" bottom-0  line-circle hidden lg:block"  style={{ transform: `translateY(${scrollPosition * 0.2}px)`,top:"730px" ,right:"-90px"}}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#1e40af"
          strokeWidth="3"
          strokeDasharray="6,3"
          className="animate-spin-slow"
        />
      </svg>
    </div>

    
     


    </div>
    <Footer/>


    
    </>
  );
};

export default Growers;


