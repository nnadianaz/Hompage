import rectangle from "../../assets/rectangle.svg";

export default function PopularMakes() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-auto gap-10 p-6 md:p-16">
        <div className="flex flex-col items-center justify-between w-full max-w-[239px] h-[62px]">
          <h2 className="text-[#1F1F2C] font-bold text-2xl md:text-3xl lg:text-4xl leading-tight" data-aos="flip-left">Popular Makes</h2>
          <img src={rectangle} alt="" className="w-[80px] h-[62px]" />
        </div>
        <div className="flex flex-col items-center justify-center max-w-[1385px] h-auto gap-6">
          {/* First Row of Makes */}
          <div className="flex flex-wrap justify-center gap-2">
            {["Honda", "BMW", "Bentley", "Acura", "Alfa Romeo", "Chevrolet", "Chrysler", "Ferrari", "Lamborghini", "Land Rover", "Yamaha ATV", "Nissan", "KIA", "Ducati Motorcycle", "Kawasaki ATV"].map((make) => (
              <div key={make} className="flex items-center justify-center p-2 rounded-md text-[#1F1F2C] bg-[#EBEBEB] text-xs md:text-sm">
                {make}
              </div>
            ))}
          </div>

          {/* Second Row of Makes */}
          <div className="flex flex-wrap justify-center gap-2">
            {["Honda", "BMW", "Bentley", "Acura", "Alfa Romeo", "Chevrolet", "Chrysler", "Ferrari", "Lamborghini", "Land Rover", "Yamaha ATV", "Nissan", "KIA", "Ducati Motorcycle", "Kawasaki ATV"].map((make) => (
              <div key={make} className="flex items-center justify-center p-2 rounded-md text-[#1F1F2C] bg-[#EBEBEB] text-xs md:text-sm">
                {make}
              </div>
            ))}
          </div>

          {/* Third Row of Makes */}
          <div className="flex flex-wrap justify-center gap-2">
            {["Honda", "BMW", "Bentley", "Acura", "Alfa Romeo", "Chevrolet", "Chrysler", "Ferrari", "Lamborghini", "Land Rover", "Yamaha ATV"].map((make) => (
              <div key={make} className="flex items-center justify-center p-2 rounded-md text-[#1F1F2C] bg-[#EBEBEB] text-xs md:text-sm">
                {make}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}