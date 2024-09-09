import pic1 from '../../assets/pic1.svg'
import pic2 from '../../assets/pic2.svg'
import pic3 from '../../assets/pic3.svg'
import { IoIosArrowRoundForward } from "react-icons/io";

const RightSection = () => {
  return (
    <div
      style={{
        padding: '20px 0px 0px 0px',
        gap: '15px',
      }}
      className=" bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-md lg:w-[220px] lg:mt-0 mt-[-30vh] lg:ml-0 ml-[-35vw] flex flex-col sm:flex-col items-center justify-between bg-[#FFFFFF]"  data-aos="fade-left">
      <div className="flex sm:w-[176px] w-[155px] lg:h-[5vw]  relative">
  <img
    src={pic1}
    alt="Profile Picture 1"
    className="rounded-full sm:w-[60px] w-[50px] sm:h-[60px] h-[50px]"
  />
  <img
    src={pic2}
    alt="Profile Picture 2"
    className="rounded-full sm:w-[60px] w-[50px] sm:h-[60px] h-[50px] absolute top-0 left-12"
  />
  <img
    src={pic3}
    alt="Profile Picture 3"
    className="rounded-full sm:w-[60px] w-[50px] sm:h-[60px] h-[50px] absolute top-0 right-4"
  />
</div>

     <div className="flex flex-col w-[164px] h-[80px]">
     <h2 className="text-[20px] text-center font-bold text-gray-800">12.5K+ PEOPLE</h2>
      <p className="text-gray-600 text-center sm:text-[14px] text-[12px]">
        has used our services such as selling, buying, or even buying their parts.
      </p>
     </div>
     <div className="flex flex-col items-center justify-center gap-[14px] w-[195px] h-[133.07px]">
      <div className="sm:w-[168px] w-[130px] h-[39.04px] flex sm:gap-[14px] gap-[10px]">
        <button className="w-[75px] h-[39.04px] text-red-500 hover:bg-red-500 border border-red-500 bg-white hover:text-white font-bold py-2 px-2 rounded-full">
          Bid
        </button>
        <button className="w-[79px] h-[39.04px]  text-red-500 hover:bg-red-500 border border-red-500 bg-white hover:text-white font-bold py-2 px-2 rounded-full">
          Buy
        </button>
      </div>
      <div className="sm:w-[168px] w-[140px] h-[39.04px] flex sm:gap-[14px] gap-[10px]">
        <button className="w-[78px] h-[39.04px] text-red-500 hover:bg-red-500 border border-red-500 bg-white hover:text-white font-bold py-2 px-2 rounded-full">
          Sell
        </button>
        <button className="w-[106px] h-[39.04px] text-red-500 hover:bg-red-500 border border-red-500 bg-white hover:text-white font-bold py-2 px-2 rounded-full">
          Consult
        </button>
      </div>
      <div className="flex items-center gap-[32px] w-[138px] h-[19px] mb-4">
        <a href="#" className="text-[#14141F] sm:text-[16px] text-[14px]">
          Learn more
        </a>
        <IoIosArrowRoundForward />
      </div>
      </div>
    </div>
  );
};

export default RightSection;
