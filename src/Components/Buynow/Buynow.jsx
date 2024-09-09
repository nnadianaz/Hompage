import BuyCard from "./BuyCard";
import localimg1 from '../../assets/localimg1.svg';
import localimg2 from '../../assets/localimg2.svg';
import localimg3 from '../../assets/localimg3.svg';
import localimg4 from '../../assets/localimg4.svg';

export default function Features() {
    const cardData = [
        { image: localimg1, title: '"Hyundai"', price: '$750', description: 'Salvador Dali' },
        { image: localimg2, title: '"Chevrolet Cruze"', price: '$750', description: 'Trista Francis' },
        { image: localimg3, title: '"RAM 1500"', price: '$1,350', description: 'Freddie Carpenter' },
        { image: localimg4, title: '"Toyota FJ"', price: '$20,000', description: 'Tyler Covington' },
    ];

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full lg:w-[98.9vw] p-6 lg:p-16">
                <div className="flex flex-col items-center justify-between w-full">
                    <h2 className="text-[#1F1F2C] font-urbanist font-bold text-[36px] lg:text-[2.34vw] leading-tight" data-aos="flip-left">Buy Now</h2>
                    <hr className="h-1 bg-red-500 mt-[15px] w-20 mx-auto" />
                </div>
                <div className="flex flex-wrap justify-center w-full max-w-full">
                    {cardData.map((card, index) => (
                        <div key={index} className='p-4 mt-[5vh]'>
                            <BuyCard
                                image={card.image}
                                title={card.title}
                                price={card.price}
                                description={card.description}
                                className="w-full items-center justify-center"
                            />
                        </div>
                    ))}
                </div>
                <div className="slider-controls flex items-center justify-center w-full md:w-[1410px] mt-4">
                    <button className="slider-arrow mr-2 p-2 text-black bg-white border border-gray-300 rounded-full" disabled>←</button>
                    <div className="slider-dots flex gap-2">
                        {Array.from({ length: 4 }).map((_, dotIndex) => (
                            <span
                                key={dotIndex}
                                className={`h-3 w-3 rounded-full border-2 border-transparent bg-black relative ${dotIndex === 0 ? 'active' : ''}`}
                            ></span>
                        ))}
                    </div>
                    <button className="slider-arrow ml-2 p-2 bg-white text-black border border-gray-300 rounded-full" disabled>→</button>
                </div>
            </div>
            </div>
        </>
    );
}