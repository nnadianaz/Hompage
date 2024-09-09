import { FiSearch } from "react-icons/fi";
import Divider from '../Herosection/Divider';
import { IoIosArrowDown } from "react-icons/io";
import Date from '../Herosection/Date';

export default function Search() {
  return (
    <>
      {/* Search Bar */}
      <div  className='transform-translate-x-1/2 flex flex-col sm:flex-row lg:flex-row items-center font-Urbanist w-[120px] sm:w-[90%] lg:w-[1000px] bg-[#FDFDFD] bg-opacity-75 backdrop-blur-md sm:h-[110px] lg:h-[110px] h-[500px] sm:mt-[110px] lg:mt-[110px] mt-[5px] sm:ml-[400px] lg:ml-[450px] ml-0 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]' data-aos="flip-left">
        <div className='flex flex-col sm:flex-row lg:flex-row items-center justify-around sm:space-x-2 lg:space-x-2 p-4 w-full'>
          <div className='flex flex-col w-full sm:w-[16%] lg:w-[16%] h-[62px] mb-2 sm:mb-0 lg:mb-0'>
            <p className='text-[#14141F] text-[14px] sm:text-[15px] lg:text-[15px] font-[600] leading-[26px]'>VIN/Lot</p>
            <input type="text" placeholder="Type Here..." className="w-full h-[24px] text-[14px] sm:text-[15px] lg:text-[15px] align-middle outline-none bg-transparent" />
          </div>
          <Divider className="block sm:hidden lg:hidden border-b border-[#EEEEEE] h-[1px] w-full mb-2" />
          <div className='flex flex-col justify-between w-full sm:w-[16%] lg:w-[16%] h-[62px] mb-2 sm:mb-0 lg:mb-0'>
            <p className='text-[#14141F] text-[14px] sm:text-[15px] lg:text-[15px] font-[600] leading-[26px]'>Car Type</p>
            <div className='flex flex-row items-center justify-between'>
              <p className='pr-2'>All Vehicles</p>
              <IoIosArrowDown className="text-[#343444] w-[16px] h-[16px] flex-shrink-0" />
            </div>
          </div>
          <Divider className="block sm:hidden lg:hidden border-b border-[#EEEEEE] h-[1px] w-full mb-2" />
          <div className='flex flex-col justify-between w-full sm:w-[16%] lg:w-[16%] h-[62px] mb-2 sm:mb-0 lg:mb-0'>
            <p className='text-[#14141F] text-[14px] sm:text-[15px] lg:text-[15px] font-[600] leading-[26px]'>Model</p>
            <div className='flex flex-row items-center justify-between'>
              <p className='truncate pr-2'>All Models</p>
              <IoIosArrowDown className="text-[#343444] w-[16px] h-[16px]" />
            </div>
          </div>
          <Divider className="block sm:hidden lg:hidden border-b border-[#EEEEEE] h-[1px] w-full mb-2" />
          <div className='flex flex-col justify-between w-full sm:w-[16%] lg:w-[16%] h-[62px] mb-2 sm:mb-0 lg:mb-0'>
            <p className='text-[#14141F] text-[14px] sm:text-[15px] lg:text-[15px] font-[600] leading-[26px]'>Source</p>
            <div className='flex flex-row items-center justify-between'>
              <p className=''>COPART</p>
              <IoIosArrowDown className="text-[#343444] w-[16px] h-[16px]" />
            </div>
          </div>
          <Divider className="block sm:hidden lg:hidden border-b border-[#EEEEEE] h-[1px] w-full mb-2" />
          <div className='flex flex-col justify-between w-full sm:w-[16%] lg:w-[16%] h-[62px] mb-2 sm:mb-0 lg:mb-0'>
            <p className='text-[#14141F] text-[14px] sm:text-[15px] lg:text-[15px] font-[600] leading-[26px]'>Date</p>
            <div className='flex flex-row items-center justify-between'>
              <Date />
            </div>
          </div>
          <div className='flex flex-col justify-end w-full sm:w-[20%] lg:w-[20%] h-[62px] mb-2 sm:mb-0 lg:mb-0 sm:pl-4 lg:pl-4'>
            <div className='flex items-end justify-center h-full mb-[20px] lg:mb-0'>
              <button className="bg-[#df4949] hover:bg-red-700 w-[50px] h-[50px] rounded-xl border-[#df4949] text-white font-bold py-2 px-4">
                <FiSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
