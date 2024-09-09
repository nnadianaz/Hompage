import redicon from '../../assets/redicon.svg';

const HoverableButton = ({  text, onClick, width }) => {
  return (
    <div 
      className='flex flex-row md:flex-row items-center justify-center md:w-[90px] lg:w-[120px] sm:w-[90px] h-[36px] border-[1px]  rounded-xl p-[8px] bg-[#FFFFFF] hover:bg-[#CA0000] group'
      onClick={onClick}
      style={{ width }}
    >
      <img 
        src={redicon} 
        alt="" 
        className='w-[15.43px] h-[20px] group-hover:filter group-hover:brightness-0 group-hover:invert' 
      />
      <button className='w-[90px] h-[24px] text-black group-hover:text-white border-transparent'>
        {text}
      </button>
    </div>
  );
};

export default HoverableButton;
