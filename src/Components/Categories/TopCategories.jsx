import CategoriesCard from "../Categories/CategoriesCard";
import carimg1 from "../../assets/carimg1.svg";
import carimg2 from "../../assets/carimg2.svg";
import carimg3 from "../../assets/carimg3.svg";
import carimg4 from "../../assets/carimg4.svg";
import carimg5 from "../../assets/carimg5.svg";
import carimg6 from "../../assets/carimg6.svg";
import carimg7 from "../../assets/carimg7.svg";
import carimg8 from "../../assets/carimg8.svg";


export default function TopCategories() {
  const categories = [
    { image: carimg1, name: 'Automobiles' },
    { image: carimg2, name: 'Super Car' },
    { image: carimg3, name: 'Motorcycles' },
    { image: carimg4, name: 'ATVs' },
    { image: carimg5, name: 'Bus' },
    { image: carimg6, name: 'Truck' },
    { image: carimg7, name: 'Trailer' },
    { image: carimg8, name: 'Motor Home' },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full lg:mt-[2vh] sm:mt-0 mt-[100px]" 
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
    <div className="flex flex-col items-center justify-center w-full lg:w-[90vw] p-6 lg:p-16">
        <div className="flex flex-col items-center justify-between w-full ">
        <h2 className="text-[#1F1F2C] font-urbanist font-bold text-[36px] lg:text-[2.34vw] leading-tight" data-aos="flip-left">Top Categories</h2>
        <hr className="h-1 bg-red-500 mt-[15px] w-20 mx-auto" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((car, index) => (
          <CategoriesCard  key={index} car={car} title={car.name} />
          
        ))}
      </div>

      <button
        className="bg-[#F3F3F6] hover:bg-red-600 cursor-pointer border-[#F3F3F6] hover:text-white w-40 h-14 rounded-full text-red-600 mt-6 mb-10"
        disabled // Optional: You can keep it disabled if you want to indicate it's not functional
      >
        Load more
      </button>
    </div>
    </div>
    </div>
  );
}