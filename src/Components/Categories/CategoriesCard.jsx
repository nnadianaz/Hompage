import check from "../../assets/check.svg";

const CarCard = ({ car, title, seeAll }) => {
  return (
    <div className="flex flex-row gap-[10px] p-4 w-[330px] h-[100px] rounded-full shadow-xl bg-white" data-aos="zoom-in">
      <div className="flex items-center">
        <img src={car.image} alt={car.name} className="relative w-[74px] h-[74px] rounded-lg" />
        <img src={check} alt="" className="absolute w-[18px] h-[18px] ml-[58px] mt-[55px]"/>
        <div className="ml-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-gray-600 text-sm">{seeAll}</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;