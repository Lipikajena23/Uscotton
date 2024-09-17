import { useState, useEffect } from "react";
import { Search, Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('news')) {
      setActiveItem("News & Announcements");
    } else if (path.includes('about')) {
      setActiveItem("About the Trust Protocol");
    } else if (path.includes('vision')) {
      setActiveItem("Our Vision");
    } else if (path.includes('benefits')) {
      setActiveItem("Member Benefits");
    } else if (path.includes('climate')) {
      setActiveItem("Climate Smart");
    } else if (path.includes('governance')) {
      setActiveItem("Governance");
    }
  }, []);

  const MenuItem = ({ href, children }) => {
    const isActive = activeItem === children;
    return (
      <li className="relative group ">
        <a 
          href={href} 
          className={`block text-blue-900 font-bold transition-colors duration-200 no-underline  ${isActive ? 'text-blue-700' : ''}`}
          onClick={() => setActiveItem(children)}
        >
          {children}
          <div className={`absolute bottom-0 left-0 w-full h-1 bg-green-500 transition-transform duration-300 origin-right ${isActive || 'group-hover:scale-x-100 translate-y-5'} ${isActive ? 'scale-x-100 ' : 'scale-x-0'} ${isActive ? 'translate-y-5' : ''}`}></div>
          
        </a>
      </li>
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md py-3 z-50 mt-2" style={{borderRadius:"10px", boxShadow:"1px 3px 9px 0"}}>
      <header className="w-full pt-2 px-4">
        <div className="flex justify-between">
          <div className="flex">
            <img src="https://trustuscotton.org/wp-content/uploads/2020/08/USCTP_Logo_NoTag_nobrdr.png" alt="U.S. Cotton Trust Protocol Logo" className="h-10 mr-4" />
            <nav className="hidden lg:block flex items-center">
              <ul className="flex space-x-4 whitespace-nowrap" style={{fontSize:"1vw"}}>
                <MenuItem href="#">About the Trust Protocol</MenuItem>
                <MenuItem href="#">Our Vision</MenuItem>
                <MenuItem href="#">Member Benefits</MenuItem>
                <MenuItem href="#">Climate Smart</MenuItem>
                <MenuItem href="/news&announcement">News & Announcements</MenuItem>
                <MenuItem href="#">Governance</MenuItem>
              </ul>
            </nav>
          </div>
          <div className="flex items-center lg:items-start space-x-3 font-bold">
            <button className="d-flex">
              <span className="hidden md:block text-blue-900 text-sm">Search</span>
              <Search size={20} className='hidden md:block pl-1 text-blue-900' />
            </button>
            <a href="#login" className="hidden md:block no-underline text-blue-900 text-sm">Login</a>
            <a href="#join" className="hidden md:block no-underline text-blue-900 text-sm">Join Now</a>
            {/* <button
              className="lg:hidden p-2 text-blue-900 transition-colors duration-200"
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
              <MenuItem href="/about">About the Trust Protocol</MenuItem>
              <MenuItem href="/vision">Our Vision</MenuItem>
              <MenuItem href="/benefits">Member Benefits</MenuItem>
              <MenuItem href="/climate">Climate Smart</MenuItem>
              <MenuItem href="/news&announcement">News & Announcements</MenuItem>
              <MenuItem href="/governance">Governance</MenuItem>
              <MenuItem href="#login">Login</MenuItem>
              <MenuItem href="#join">Join Now</MenuItem>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}

export default Navbar;
