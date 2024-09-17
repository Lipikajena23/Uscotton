import React, { useState,useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Search, Menu, X } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';

function Landingpage() {
    const MenuItem = ({ href, children, hasSubmenu = false }) => (
        <li className=" font-bold  ">
            <a href={href} className="block  text-blue-900 transition-colors duration-200 no-underline">
                {children}
               
            </a>
        </li>
    );

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const carouselItems = [
        { src: "https://trustuscotton.org/wp-content/uploads/2021/09/Eight-March-Textile-Company-Limited.png", alt: "Eight March Textile Company Limited" },
        { src: "https://trustuscotton.org/wp-content/uploads/2022/02/Gildan.png", alt: "Gildan logo" },
        { src: "https://trustuscotton.org/wp-content/uploads/2021/03/brandlogo.png", alt: "brandlogo" },
        { src: "https://trustuscotton.org/wp-content/uploads/2021/03/YAKJIN-TRADING-CO.png", alt: "YAKJIN-TRADING-CO" },
        { src: "https://trustuscotton.org/wp-content/uploads/2021/03/Pilu-Uniforms.png", alt: "Pilu-Uniforms" },
        { src: "https://trustuscotton.org/wp-content/uploads/2022/10/Ralph-Lauren-Corporate-Logo-Stacked.png", alt: "Ralph Lauren Corporation - Brand Logo" },
        { src: "https://trustuscotton.org/wp-content/uploads/2022/05/target-padding-400.png", alt: "Target logo" },
        { src: "https://trustuscotton.org/wp-content/uploads/2021/03/Advance-Denim.png", alt: "Advance-Denim" },
    ];


    const ArticleCard = ({ image, categories, title, link }) => (
        <div className="bg-white text-left shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 text-blue-900" style={{boxShadow:"1px 5px 50px 0 rgb(198, 211, 220)"}}>
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


      const partners = [
        { name: 'Cotton Incorporated', logo: 'https://trustuscotton.org/wp-content/uploads/2021/09/Eight-March-Textile-Company-Limited.png', url: '#' },
        { name: 'Cotton USA', logo: 'https://trustuscotton.org/wp-content/uploads/2020/04/seam.svg', url: '#' },
        { name: 'Field to Market', logo: 'https://trustuscotton.org/wp-content/uploads/2020/04/ci.svg', url: '#' },
        { name: 'The Seam', logo: 'https://trustuscotton.org/wp-content/uploads/2020/04/ci.svg', url: '#' },
        { name: 'National Cotton Council', logo: 'https://trustuscotton.org/wp-content/uploads/2020/04/cci.svg', url: '#' },
      ];
      
     
        const [currentIndex, setCurrentIndex] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
          }, 5000);
      
          return () => clearInterval(interval);
        }, []);
      
        const nextSlide = () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
        };
      
        const prevSlide = () => {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length);
        };
      
    return (
      <>
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image Container */}
            <div
                className="w-full bg-cover  bg-no-repeat "
                style={{
                    backgroundImage: "url('landingbackground.png')",
                }}
            >
                {/* Content Overlay */}
                <div className=" bg-opacity-50">
                    {/* Header */}
                    <header className="w-full py-4 lg:mb-24">
                        <div className=" container flex justify-between ">
                            <div className="flex items-center">
                                <img src="https://trustuscotton.org/wp-content/uploads/2020/08/USCTP_Logo_NoTag_nobrdr.png" alt="U.S. Cotton Trust Protocol Logo" className="h-10 mr-4 lg:hidden" />
                                <nav className="hidden lg:block">
                                    <ul className="flex space-x-4 whitespace-nowrap " style={{fontSize:"1.1vw"}}>
                                        <MenuItem href="#" hasSubmenu>About the Trust Protocol</MenuItem>
                                        <MenuItem href="#" hasSubmenu>Our Vision</MenuItem>
                                        <MenuItem href="#" hasSubmenu>Member Benefits</MenuItem>
                                        <MenuItem href="#" hasSubmenu>Climate Smart</MenuItem>
                                        <MenuItem href="/news&announcement" hasSubmenu>News & Announcements</MenuItem>
                                        <MenuItem href="#" hasSubmenu>Governance</MenuItem>
                                    </ul>
                                </nav>
                            </div>
                            <div className="flex items-center space-x-3 lg:space-x-1">
                                <button className="nav-btn d-flex">
                                   <span className='hidden md:block'>Search</span> <Search size={20} className='pl-1' />
                                </button>
                                <a href="#login" className=" nav-btn hidden md:block no-underline  " >
                                    Login
                                </a>
                                <a href="#join" className="hidden md:block nav-btn no-underline">
                                    Join Now
                                </a>
                                {/* <button
                                    className="lg:hidden p-2 text-blue-900  transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </button> */}
                                <button className='lg:hidden p-2 text-blue-900 '><Menu size={24} /></button>
                            </div>
                        </div>
                        {isMenuOpen && (
                            <nav className="lg:hidden bg-black bg-opacity-80 shadow-md">
                                <ul className="py-2">
                                    <MenuItem href="#" hasSubmenu>About the Trust Protocol</MenuItem>
                                    <MenuItem href="#" hasSubmenu>Our Vision</MenuItem>
                                    <MenuItem href="#" hasSubmenu>Member Benefits</MenuItem>
                                    <MenuItem href="#" hasSubmenu>Climate Smart</MenuItem>
                                    <MenuItem href="#" hasSubmenu>News & Announcements</MenuItem>
                                    <MenuItem href="#" hasSubmenu>Governance</MenuItem>
                                    <MenuItem href="#login">Login</MenuItem>
                                    <MenuItem href="#join">Join Now</MenuItem>
                                </ul>
                            </nav>
                        )}
                    </header>

                    {/* Main Content */}
                    <div className="flex flex-col  justify-center flex-grow text-left container ">
                        <div className="">
                            {/* Logo for larger screens */}
                            <img src="https://trustuscotton.org/wp-content/uploads/2020/08/USCTP_Logo_NoTag_nobrdr.png" alt="U.S. Cotton Trust Protocol Logo" className="hidden lg:block h-16 lg:mb-4 " />
                        </div>
                        <div className='lg:w-1/2'>
                        <h1 className="text-4xl font-bold mb-4 text-blue-900 ">Trust in a Smarter Cotton Future</h1>
                        <h5 className="text-xl mb-4 text-blue-900">
                            The U.S. Cotton Trust Protocol's vision is to set a new standard in sustainable cotton production where full transparency is a reality and continuous improvement of our environmental footprint is the central goal.
                        </h5>
                        <p className="mb-6 text-blue-900">
                            Launched in 2020, the U.S. Cotton Trust Protocol is built on a foundation of robust data capture, aggregation and reporting that drives continuous improvement across six key sustainability metrics – water use, energy efficiency, greenhouse gas emissions, soil conservation, soil carbon and land use – and is the world's first sustainable cotton fiber program to offer article-level supply chain transparency.
                        </p>
                        <p className="mb-6 text-blue-900">
                            These program elements make the Trust Protocol the first program to provide both access to full supply chain transparency and science-based field-level, verified data.
                        </p>
                        </div>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-900 no-underline"
                            
                        >
                            <span>Join Now</span>
                  
                        </a>

                         {/* Carousel */}
            <div className="py-8">
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={2000}
                    centerMode={true}
                    centerSlidePercentage={20}
                    responsive={{
                        desktop: {
                            breakpoint: { max: 3000, min: 1024 },
                            items: 3
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 464 },
                            items: 2
                        },
                        mobile: {
                            breakpoint: { max: 464, min: 0 },
                            items: 1
                        }
                    }}
                >
                    {carouselItems.map((item, index) => (
                        <div key={index} className="flex justify-center items-center mb-20">
                            <img src={item.src} alt={item.alt} className="object-contain h-24 md:h-32 lg:h-20" />
                        </div>
                    ))}
                </Carousel>
            </div>
                    </div>

                    
                </div>
            </div>

           
        </div>
        <div className="bg-white rounded-3xl -mt-8 md:-mt-16 relative z-10 py-20  text-left  " style={{marginLeft:"60px", marginRight:"60px" , boxShadow:"0 5px 29px 0 "}}>
         <div className='px-9'>
        <div className='py-3 text-blue-900 font-bold lg:text-8xl sm:text-5xl sm-text-center text-3xl ' >A LETTER FROM OUR PRESIDENT</div>
        <div className="grid md:grid-cols-2 gap-8  mb-4">
        <div >
         
          <p className="text-blue-900 mb-4">
            Today, the Trust Protocol offers unrivalled transparency and
            visibility of cotton through the supply chain, backed by an
            unparalleled level of independently verified data from our grower
            members. We are bringing quantifiable and verifiable goals and
            measurement to the key sustainability metrics of U.S. cotton
            production — building trust from field to fabric and enabling
            continuous improvement across the supply chain.
          </p>
          <p className="text-blue-900 mb-4">
            The Trust Protocol is designed to ensure that it contributes to the
            protection and preservation of the planet, using the most
            sustainable and responsible techniques. At the same time, we
            wanted to meet the needs of brands and retailers in the fashion
            and textile industries, which are increasingly expected to show the
            sourcing data for their products. With the Trust Protocol we are
            providing access to more sustainably grown cotton for brands and
            retailers, and science based, data-led assurances that their
            consumers can have confidence in — something that has been
            lacking in the industry to date.
          </p>
        </div>
        <div>
          <p className="text-blue-900 mb-4">
            The U.S. cotton industry's existing commitment to leadership in
            more sustainable cotton growing practices was clear as we
            developed the Trust Protocol. It's an industry that is innovative and
            technologically sophisticated. It is crucial we enable the sector to
            build on these strengths in years to come in the pursuit of
            evermore sustainable forms of production and assurance across
            the supply chain.
          </p>
          <p className="text-blue-900 mb-4">
            It's an exciting time and we are pleased to share our progress, data
            insights to date, and vision for the future of more sustainable
            cotton with members and stakeholders across the sector as a
            whole. Thank you for partnering and collaborating with us in this
            effort.
          </p>
          <div className="flex items-center mt-6">
            <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden mr-4">
              {/* <User className="w-full h-full text-gray-600" /> */}
              <img src='https://trustuscotton.org/wp-content/uploads/2020/06/gary-adams.jpg'/>
            </div>
            <div>
              <div className="font-bold text-green-500 text-2xl">Dr. Gary Adams</div>
              <div className="text-blue-900">President</div>
              <div className="text-blue-900">U.S. Cotton Trust Protocol</div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full flex flex-col md:flex-row justify-center items-center md:items-start bg-blue-900 animate-fadeIn  rounded-3xl sm:p-4">
  {/* Left Column - Image */}
  <div className="md:w-1/2 w-full flex justify-center md:justify-end  md:p-4 fadeInUp relative  lg:-mb-20 lg:w-1/4">
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img
        src="https://trustuscotton.org/wp-content/uploads/2024/02/2024-Annual-Report-Website-Header-169-1-1024x576.png"
        alt="Annual Report"
        className="object-contain w-full md:w-3/4 lg:w-40 rounded-xl"
      />
    </a>
  </div>

  {/* Right Column - Button */}
  <div className="md:w-1/2  fadeIn delay-500 lg:w-full">
    <div className="elementor-button-wrapper">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-white  py-4 rounded  transition no-underline"
      >
        <i className="fas fa-angle-right mr-2"></i>
        <span>Click to View the 2023 Annual Report » </span>
      </a>
    </div>
  </div>
</section>
        </div>
        </div>


        <section className=" bg-white p-5 conatiner">
      <div className="container px-5 flex flex-col md:flex-row items-center justify-between">
        {/* Left Column - Heading */}
        <div className="w-full lg:w-1/2 sm:text-center md:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-6xl font-bold text-blue-900">BECOME A MEMBER TODAY</h2>
        </div>

        {/* Right Column - Button */}
        <div
           className="w-full lg:w-1/2 flex justify-center lg:justify-center py-4"
           onClick={() => window.open("#", "_self")}
           style={{ cursor: "pointer" }}
        >
          <a
            href="#"
            className="bg-green-600 text-white text-lg w-40 h-40 flex items-center justify-center rounded-full transform transition-transform duration-300 hover:scale-125 hover:w-56 hover:h-56 hover:bg-blue-900 no-underline"
          >
            JOIN NOW
          </a>
        </div>
      </div>
    </section>

    <div className='container p-5 '>
        <p className='text-blue-900 text-left text-xl pb-9'>The Climate Smart Cotton Program, led by the Trust Protocol, is a 5-year initiative that presents a transformative opportunity for cotton growers, offering a range of benefits that go beyond sustainability. By joining this innovative initiative, growers can enhance their operations, profitability, and environmental stewardship, all while contributing to the long-term viability of the U.S. cotton industry.</p>
        <button className='bg-blue-900 text-white px-4 py-2.5 rounded-md text-xl'>Learn more</button>
    </div>


    <section
      className="relative w-full py-12  bg-center"
      style={{
        backgroundImage:
          "url('https://trustuscotton.org/wp-content/uploads/2022/09/cotton_farm_feild.jpg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white opacity-90"></div>

      <div className="relative container mx-auto px-4 flex flex-col lg:flex-row">
        {/* Left Column - Heading */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 pr-14">
          <h2 className="text-6xl font-bold text-blue-900 text-left leading-tight mb-4 ">
            THREE
            <br />
            PILLARS
          </h2>
          <p className="text-blue-900 text-left  ">
            The program was created where the core values focus on U.S. cotton’s
            legacy of authenticity, innovation and excellence, environmental
            stewardship, caring of people, and personal and corporate integrity,
            as well as a{" "}
            <a
              href="https://trustuscotton.org/vision/theory-of-change/"
              className="underline text-blue-900 font-bold no-underline hover:text-green-600"
            >
              Theory of Change
            </a>{" "}
            that is grounded in science-based measurement and feedback.
          </p>
        </div>

        {/* Right Column - Icon Boxes */}
        <div className="w-full lg:w-1/2 space-y-8 px-9">
          <div className="flex text-left space-x-4 ">
            <div className="flex-shrink-0">
              <span className="text-green-300 text-7xl">
              <FontAwesomeIcon icon={faCheck} aria-hidden="true" />
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-left text-blue-900 ">
                Quantifiable, verifiable goals and measurement in key
                sustainability metrics for brands and retailers
              </h3>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <span className="text-green-300 text-7xl">
              <FontAwesomeIcon icon={faCheck} aria-hidden="true" />
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-left text-blue-900 ">
                Article-level supply chain transparency for all members
              </h3>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <span className="text-green-300 text-7xl">
              <FontAwesomeIcon icon={faCheck} aria-hidden="true" />
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-left text-blue-900 ">
                Continuous improvement is central to U.S. cotton production
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className='news-events-container'>
    <section className=" news-events-container py-12">
      <div className="mx-10 ">
        <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8 justify-content-between">
          <div className="flex flex-col items-start pt-16">
            <h2 className="text-5xl font-bold whitespace-nowrap  pb-12 pr-9 text-blue-900">News & Events</h2>
            <a
              href="#"
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

    <section className=" py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-2xl font-bold text-blue-900 text-left">Our Partners</h3>
            <p className="text-blue-900 text-left">We are proud to work with the following partners.</p>
          </div>
          <div className="w-full md:w-2/3 relative">
           
             
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    showIndicators={false}
                    autoPlay={true}
                    interval={3000}
                    transitionTime={800}
                    centerMode={true}
                    centerSlidePercentage={33.33}
                    responsive={{
                        desktop: {
                            breakpoint: { max: 3000, min: 1024 },
                            items: 3
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 464 },
                            items: 2
                        },
                        mobile: {
                            breakpoint: { max: 464, min: 0 },
                            items: 1
                        }
                    }}>
                {partners.map((partner, index) => (
                  <div key={index} className="w-full flex-shrink-0 ">
                    <a
                      href={partner.url}
                    
                      className="block  p-4 rounded-lg transition-shadow duration-300"
                    >
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-full h-20 object-contain grayscale"
                      />
                    </a>
                  </div>
                ))}
                </Carousel>
             
         
           
          </div>
        </div>
      </div>
    </section>
    </div>
    <Footer/>
        </>
    );
}

export default Landingpage;
