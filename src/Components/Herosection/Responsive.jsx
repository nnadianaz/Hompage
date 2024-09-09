
import tree from '../../assets/tree.svg';
import car from '../../assets/car.svg';
import social from '../../assets/Socials.svg';
import RightSection from './RightSection';
import Numbercard from './Numbercard';
import Search from './Search';


export default function CarHero() {
  return (
  <div className='relative'>
      <div 
      className="relative flex flex-row items-center justify-between  mx-auto w-full min-h-[100px] p-4">
           
        <div 
        className="absolute inset-0 bg-hero"
        style={{
          '--bg-image': `url(${car}), url(${tree})`,
        }}
        ></div>
       

      {/* Left Section */}
      <div className="relative lg:w-1/2 w-[70vw] h-[100vh] lg:h-[70vh]">

    <div className="relative z-10 ">
      <h1 className="text-transparent w-full lg:w-[40vw] lg:h-[10vh] text-[2.561rem] whitespace-nowrap text-ellipsis outline-text font-urbanist">
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

      <div className='absolute flex flex-col justify-start gap-[50px] sm:gap-[190px] max-w-full mt-[49vh] sm:mt-[50vh] ml-[48vh] sm:ml-[80vh]'>
      <Numbercard />
      <Search/>
      </div>
        
      {/* Right Section */}
      <RightSection/>
      {/* <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] h-full"> */}
     
      </div>
  </div>
    
    
  );
}