import logo from '../../assets/luxlogo.svg'
import { FaFacebook } from "react-icons/fa";
import xicon from '../../assets/xicon.svg'
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import buttonicon from '../../assets/buttonicon.svg'


function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full bg-[#F8F8F8] py-8 text-gray-600">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:grid-cols-2 lg:flex-row gap-4 items-start justify-around sm:items-center mb-10">
          <div className="flex flex-col items-start">
            <img src={logo} alt="" className='w-[224px] h-[45.64px]'/>
            <p className='w-[224px] h-[110px] text-[14px] mt-4 mb-4'>
              Trust in the Lord with all your heart, And lean not on your own understanding:
              In all your ways acknowledge Him. And He shall direct your paths.
              -Proverbs 3:5-6
            </p>
            <div className='flex flex-row gap-[12px] w-[196px] h-[40px] '>
            <button className='w-[40px] h-[40px] hover:bg-[#524747] rounded-lg flex justify-center items-center'>
            <FaFacebook className='w-[24px] h-[24px] text-gray-500'/>
          </button>
          <button className="w-[40px] h-[40px] hover:bg-[#524747] bg-[#EBEBEB] rounded-lg flex justify-center items-center">
            <img src={xicon} alt="" className='w-[24px] h-[24px] text-gray-500'/>
        </button>
        <button className='w-[40px] h-[40px] hover:bg-[#524747] bg-[#EBEBEB] rounded-lg flex justify-center items-center'>
            <FaGoogle className='w-[24px] h-[24px] text-gray-500'/>
          </button>
          <button className='w-[40px] h-[40px] hover:bg-[#524747] bg-[#EBEBEB] rounded-lg flex justify-center items-center'>
          <FaLinkedinIn className='w-[24px] h-[24px] text-gray-500'/>
          </button>
            </div>
          </div>
          
            <div className="flex flex-col text-start">
              <h3 className="text-[18px] font-bold text-[#1F1F2C] ">Shipping Destinations</h3>
              <ul className='flex flex-col text-[#1F1F2C] text-[14px]'>
                <li>Nassau</li>
                <li>Freeport</li>
                <li>Abaco</li>
                <li>Bimini</li>
              </ul>
            </div>
            <div className="flex flex-row sm:flex-row sm:gap-20 gap-10 text-start">
            <div className="flex flex-col text-start">
              <h3 className="text-[18px] font-bold text-[#1F1F2C]">Useful Links</h3>
              <ul className='flex flex-col text-[#1F1F2C] text-start text-[14px]'>
                <li>Influencer Partners</li>
                <li>Privacy Policies</li>
                <li>Terms & Conditions</li>
                <li>Fees</li>
              </ul>
            </div>
            <div className="flex flex-col text-start">
              <h3 className="text-[18px] font-bold text-[#1F1F2C]">Company</h3>
              <ul className='flex flex-col text-[#1F1F2C] justify-center items-center text-[14px]'>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>My Account</li>
                <li>Discover</li>
              </ul>
            </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[18px] font-bold text-[#1F1F2C] ">Subscribe</h3>
              <div>
              <p>Head Quarters: Abaco. Bahamas</p>
              <p>Phno: +12428259510</p>
              </div>
              <div className="relative flex items-center">
              <input
                type="email"
                className="sm:w-[311px] w-[300px] h-[46px] border border-gray-300 rounded-md px-3 py-2 mb-2 focus:border-gray-300 focus:outline-none"
                placeholder="info@yourgmail.com"
              />
              <button className="absolute sm:w-[48px] w-[40px] h-[46px] ml-[263px] mt-[-8px] bg-[#CA0000] hover:bg-[#8b1313] border border-transparent flex items-center justify-center rounded-r-lg">
                <img src={buttonicon} alt="" />
              </button>
            </div>

            </div>
          </div>
        </div>
        <div className=" pt-10 p-[0px 0px 30px 0px] h-[82px] text-center text-[14px] text-[#1F1F2C] border-t w-full">
    © 2024 LUX First Choice Cars. All rights reserved.
</div>
    </footer>
  );
}

export default Footer;
