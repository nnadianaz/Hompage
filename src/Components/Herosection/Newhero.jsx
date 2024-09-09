
import tree from '../../assets/tree.svg';
import car from '../../assets/car.svg';
import social from '../../assets/Socials.svg';
import RightSection from './RightSection';
import Numbercard from './Numbercard';
import Search from './Search';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export default function CarHero() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation in milliseconds
    });
  }, []);

  return (
  <div className='relative'>
      <div 
      className="relative flex flex-col lg:flex-row items-center justify-between sm:justify-around md:justify-around lg:justify-around mx-auto w-90% lg:w-[90%] min-h-[100px] p-4 lg:p-20">
           
        <div 
        className="absolute inset-0 bg-hero"
        style={{
          '--bg-image': `url(${car}), url(${tree})`,
        }}
        ></div>
       

      {/* Left Section */}
      <div className="relative lg:w-1/2 w-[50%] h-[970px] lg:h-[70vh]" data-aos="fade-right">

    <div className="relative z-10">
      <h1 className="text-transparent w-[50%] lg:w-[40vw] lg:h-[10vh] text-[2.561rem] whitespace-nowrap text-ellipsis outline-text font-urbanist">
        Bid, Buy, Drive
        </h1>
        <h2 className='w-[250px] sm:w-[400px] h-auto sm:h-[204px] text-[30px] sm:text-[46px] leading-tight sm:leading-[68px] font-[700]'>Online Car Auctions with Home Delivery!</h2>
       
        <p className="w-full sm:w-[320px] text-[#8A8AA0] mt-4 text-base sm:text-[18px] font-[500]">
          Lorem ipsum dolor sit amet. Ea similique aliquam ut maxime necessitatibus est nemo error sed vero sequi sapiente cum quae tempora sed quaerat.
        </p>
        <button className="bg-[#ca0000] hover:text-[#ca0000] hover:bg-white border border-[#ca0000] text-white duration-200 font-urbanist flex text-[18px] font-[600] rounded-full items-center justify-center lg:text-[1vw] lg:px-[1.3vw] h-[5.284vh] my-[2vh] w-[150px] lg:w-[10vw]">
          Start Bidding
        </button>
        <div className="flex space-x-4 mt-6">
          <img src={social} alt="" className='w-[106px] h-[23.42px] gap-[16px] mt-6' />
        </div>
      </div>
      </div>

      <div className='absolute flex flex-col items-center justify-center max-w-full lg-w-[50%] lg:mt-[310px] sm:mt-[-50px] mt-[350px] sm:gap-[40px] lg:gap-[290px] gap-[60px] lg:mr-[180px] mr-[-190px] sm:mr-[350px]'>
      <Numbercard />
      <Search />
      </div>
        
      {/* Right Section */}
      <RightSection />
     
     
      </div>
  </div>
    
    
  );
}