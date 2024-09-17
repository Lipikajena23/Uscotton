import {useState, useEffect} from 'react';
import './style.css';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const NewsannouncementPage = () => {

  const NewsContainer = ({ title, date, category, image }) => (
    <motion.div  className="bg-white rounded-lg  pb-4 mb-4 lg:mb-0 text-left"
    initial={{ y: 0 }}
    whileHover={{ y: -15 }} // Move up by 10px on hover
    transition={{ stiffness: 500 }}
    style={{boxShadow:"4px 10px 50px 8px rgb(198, 211, 230)"}}>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
      <div className="text-sm text-green-500 mb-2 px-6">{category}</div>
      <h2 className="text-xl font-bold text-blue-900 mb-2 px-6">{title}</h2>
      <p className="text-sm text-green-500 mb-4 px-6">Posted {date}</p>
      <button className="text-blue-900 font-semibold inline-flex items-center group px-6">Read More <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20" 
            fill="currentColor"
            whileHover={{ x: 8 }}
            transition={{  stiffness: 400, damping: 15 }}
          >
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </motion.svg></button>
    </motion.div>
  );
  const [currentPage, setCurrentPage] = useState(1);

  const newsData = [
    {
      title: "Sustainability Takes Center Stage at the Textile Exchange Conference",
      date: "November 20, 2023",
      category: "Featured, News",
      image:"/1stcontainerimg.png"
    },
    {
      title: "Total area of enrolled planted cotton acres grows by a further 25%",
      date: "October 25, 2023",
      category: "Announcements, Brands & Retailers, Featured, Growers, News",
      image:"/Announcements.png"
    },
    {
      title: "Trust Protocol Releases Revised Principle and Criteria",
      date: "October 17, 2023",
      category: "Featured, News",
      image:"/trust.png"
    },
    {
      title: "New Sustainable Cotton Initiatives Launched",
      date: "December 5, 2023",
      category: "Initiatives, News",
      image:"https://trustuscotton.org/wp-content/uploads/2023/12/TrustProtocolFarmTour2023.png"
    },
    {
      title: "Annual Cotton Industry Summit Announced",
      date: "January 10, 2024",
      category: "Events, News",
      image:"https://trustuscotton.org/wp-content/uploads/2023/12/TrustProtocolFarmTour2023.png"
    },
    {
      title: "Breakthrough in Eco-Friendly Cotton Processing",
      date: "February 2, 2024",
      category: "Innovation, Featured",
      image:"https://trustuscotton.org/wp-content/uploads/2023/12/TrustProtocolFarmTour2023.png"
    },
    {
      title: "Sustainability Takes Center Stage at the Textile Exchange Conference",
      date: "November 20, 2023",
      category: "Featured, News",
      image:"/1stcontainerimg.png"
    },
    {
      title: "Total area of enrolled planted cotton acres grows by a further 25%",
      date: "October 25, 2023",
      category: "Announcements, Brands & Retailers, Featured, Growers, News",
      image:"/Announcements.png"
    },
    {
      title: "Trust Protocol Releases Revised Principle and Criteria",
      date: "October 17, 2023",
      category: "Featured, News",
      image:"/trust.png"
    },
    {
      title: "New Sustainable Cotton Initiatives Launched",
      date: "December 5, 2023",
      category: "Initiatives, News",
      image:"https://trustuscotton.org/wp-content/uploads/2024/01/enroll.png"
    },
    {
      title: "Annual Cotton Industry Summit Announced",
      date: "January 10, 2024",
      category: "Events, News",
      image:"https://trustuscotton.org/wp-content/uploads/2024/01/enroll.png"
    },
    {
      title: "Breakthrough in Eco-Friendly Cotton Processing",
      date: "February 2, 2024",
      category: "Innovation, Featured",
      image:"https://trustuscotton.org/wp-content/uploads/2024/01/enroll.png"
    },
    {
      title: "Sustainability Takes Center Stage at the Textile Exchange Conference",
      date: "November 20, 2023",
      category: "Featured, News",
      image:"/1stcontainerimg.png"
    },
    {
      title: "Total area of enrolled planted cotton acres grows by a further 25%",
      date: "October 25, 2023",
      category: "Announcements, Brands & Retailers, Featured, Growers, News",
      image:"/Announcements.png"
    },
    {
      title: "Trust Protocol Releases Revised Principle and Criteria",
      date: "October 17, 2023",
      category: "Featured, News",
      image:"/trust.png"
    },
    {
      title: "New Sustainable Cotton Initiatives Launched",
      date: "December 5, 2023",
      category: "Initiatives, News",
      image:"https://trustuscotton.org/wp-content/uploads/2024/01/enroll.png"
    },
    {
      title: "Annual Cotton Industry Summit Announced",
      date: "January 10, 2024",
      category: "Events, News",
      image:"https://trustuscotton.org/wp-content/uploads/2024/01/enroll.png"
    },
    {
      title: "Breakthrough in Eco-Friendly Cotton Processing",
      date: "February 2, 2024",
      category: "Innovation, Featured",
      image:"https://trustuscotton.org/wp-content/uploads/2024/01/enroll.png"
    },
    {
      title: "Breakthrough in Eco-Friendly Cotton Processing",
      date: "February 2, 2024",
      category: "Innovation, Featured",
      image:"https://trustuscotton.org/wp-content/uploads/2024/01/enroll.png"
    }
  ];

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


  const navigate = useNavigate();
  const navButtons = [
    { name: 'Growers', path: '/grower-information' },
    { name: 'Brands & Retailers', path: '/brand-and-retailer-hub' },
    { name: 'Mills & Manufacturers', path: '/mill-and-manufacturer-resources' },
    { name: 'Merchants & Cooperatives', path: '/merchant-and-cooperative-center' },
    { name: 'Events', path: '/upcoming-events' },
    { name: 'Resources', path: '/resource-library' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
     <Navbar/>
    <div className="min-h-screen bg-white rounded-xl pt-14 relative overflow-hidden">
     

      {/* Main content */}
      <main className="relative">
        {/* Blue background section */}
        <div className="bg-blue-900   m-3" style={{padding:"6rem 12%"}} >

          <div className='heading text-left text-5xl font-bold pb-2'>News</div>
          <div className='heading text-left text-5xl font-bold pb-3'>& Announcements</div>
          <div className='custom-text text-left pb-3'>Stay updated about the Trust Protocol and sustainable cotton  production in the U.S. find all past press releases and announcements below.</div>
          <div className='heading text-left font-bold pb-4'>Filter for...</div>
            {/* Navigation buttons */}
            <div className="flex flex-wrap gap-4 mb-8 pb-20">
            {navButtons.map((item) => (
                <motion.button
                  key={item.name}
                  className="bg-white text-blue-900 px-4 py-2 rounded shadow hover:bg-blue-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
        </div>

        {/* Overlapping white section */}
        <div className=" rounded-t-3xl -mt-8 md:-mt-16 relative z-10 " style={{marginLeft:"12%",marginRight:"12%"}}>
         

            {/* Featured content */}
            <motion.div 
              
              className="bg-white rounded-lg  overflow-hidden md:flex "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 ,stiffness:"300"}}
              // initial={{ y: 0 }}
              whileHover={{ y: -9 }} 
              style={{boxShadow:"1px 12px 20px 0px rgb(198, 212, 230)"}}
  
            >
              <div className="lg:w-3/4 md:w-1/2">
                <img src="/cotton.png" alt="Cotton plant" className="w-full h-64 md:h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-9 text-left flex flex-col">
              <div className="flex-grow space-y-4">
                 <a href='#' className='text-blue-900 font-semibold '>Featured, Growers, News</a>
                <h2 className="text-2xl font-bold text-blue-900">Trust Protocol Grower Enrollment Climbs for Fifth Straight Year</h2>
                <p className="text-green-600 text-xl">Posted July 24, 2024</p>
                </div>
                <motion.button
                  className="text-blue-900 transition-colors text-left font-bold"
          
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>




            <div className=" py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
        {displayedNews.map((news, index) => (
          <NewsContainer key={index} {...news} />
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



      <div className="fixed  bottom-0 w-64 h-64 line-circle hidden lg:block"  style={{ transform: `translateY(${scrollPosition * 0.3}px)` ,top:"1560px", right:"-50px" }}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#1e40af"
          strokeWidth="3"
          strokeDasharray="6,5"
          className="animate-spin-slow"
        />
      </svg>
    </div>

    
      <div className=" dotted-circle hidden lg:block"  style={{ transform: `translateY(${scrollPosition * 0.3}px)`,top:"1700px",left:"-230px" }}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="green"
          strokeWidth="1"
          strokeDasharray="2,2"
          className="animate-spin-slow"
        />
      </svg>
    </div>


    </div>
    <Footer/>
    </>
  );
};

export default NewsannouncementPage;


