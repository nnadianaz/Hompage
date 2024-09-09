import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
    return (
        <div className="max-w-full h-[40px] bg-[#7A798A] sm:hidden hidden md:flex">
            <div className="flex flex-row justify-between items-center mx-auto px-4 md:px-15 lg:px-4 w-full md:w-[1390px]">
                <h1 className="text-[#FFFFFF] mt-2 text-[16px] md:text-[18px] font-[700] leading-[20px] md:leading-[26px]">
                    BMW XYZ 2018 IS GOING LIVE FOR AUCTION IN 5 MINUTES!!
                </h1>
                <div className="flex flex-row mt-1 justify-between w-[210px] md:w-[210px] h-[26.4px]">
                    <div className="flex flex-row items-center justify-center md:w-[110px] w-[129.12px] h-[26.4px] gap-[8px] md:gap-[12px] border rounded-md border-[#EBEBEB]">
                        <p className="text-[#EBEBEB] text-[12px] md:text-[10px]">(UTC+00:00) UTC</p>
                        <IoIosArrowDown className="text-[#EBEBEB] w-[5px] md:w-[5.64px] h-[5px] md:h-[5.64px]" />
                    </div>
                    <div className="flex flex-row items-center justify-center w-[60px] md:w-[68.88px] h-[26.4px] gap-[8px] md:gap-[12px] border rounded-md border-[#EBEBEB]">
                        <p className="text-[#EBEBEB] text-[12px] md:text-[10px]">English</p>
                        <IoIosArrowDown className="text-[#EBEBEB] w-[5px] md:w-[5.64px] h-[5px] md:h-[5.64px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}