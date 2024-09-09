import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../assets/luxlogo.svg';
import contIcon from '../../assets/users-Filled.svg';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 h-[450px] w-[200px] bg-white rounded-xl shadow-lg z-20 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full shadow-lg">
          <ul className="flex flex-col text-[14px] cursor-pointer">
            <SidebarItem text="How It Works" />
            <SidebarItem text="Fees" />
            <SidebarItem text="About" />
            <SidebarItem text="Help" />
            <SidebarItem text="Contact" />
          </ul>
          {/* Login / Sign Up and Try Demo Buttons */}
          <div className="flex flex-col items-center mt-auto p-4 cursor-pointer">
            <p className="text-[18px] font-bold leading-[26px] text-[#7A798A] mb-2">Login / SignUp</p>
            <button className="w-full lg:w-[22vw] h-[46px] rounded-full text-[18px] lg:text-[1vw] bg-[#CA0000] text-white mb-2">
              Try Demo
            </button>
          </div>
        </div>
      </div>

     {/* Navbar */}
<div className="w-[90%] h-[80px] bg-white border-b border-[#8A8AA0] mx-auto flex justify-around items-center px-4 md:px-8">
  {/* Logo and Menu */}
  <div className="flex items-center space-x-8">
    {/* Logo */}
    <div className="flex items-center">
      <img src={logo} alt="Logo" className="w-[224px] h-[45.64px]" />
    </div>

    {/* Menu for larger screens */}
    <div className="hidden md:flex items-center cursor-pointer space-x-4">
      <ul className="flex space-x-4">
        <li className="lg:text-[18px] text-[14px] font-bold leading-[26px] text-[#7A798A]">How It Works</li>
        <li className="lg:text-[18px] text-[14px] font-bold leading-[26px] text-[#7A798A]">Fees</li>
        <li className="lg:text-[18px] text-[14px] font-bold leading-[26px] text-[#7A798A]">About</li>
        <li className="lg:text-[18px] text-[14px] font-bold leading-[26px] text-[#7A798A]">Help</li>
        <li className="lg:text-[18px] text-[14px] font-bold leading-[26px] text-[#7A798A]">Contact</li>
      </ul>
    </div>
  </div>

  {/* Hamburger Menu Button for Mobile */}
  <button
    className="md:hidden p-4 text-black"
    onClick={toggleSidebar}
  >
    <GiHamburgerMenu className="w-6 h-6 " />
  </button>

  {/* Login/Signup and Try Demo */}
  <div className="hidden md:flex items-center space-x-4">
    <img src={contIcon} alt="Contact Icon" className="w-[20px] h-[20px]" />
    <p className="text-[18px] cursor-pointer font-bold leading-[26px] text-[#7A798A]">Login / SignUp</p>
    <button className="w-[128px] h-[46px] rounded-full text-[18px] bg-[#CA0000] text-white">
      Try Demo
    </button>
  </div>
</div>
    </>
  );
}

const SidebarItem = ({ text }) => (
  <li className="flex items-center p-4 hover:bg-gray-200">
    {text}
  </li>
);
