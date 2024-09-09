
import FeatureCard from "./FeatureCard";
import featimg1 from '../../assets/featimg1.svg';
import featimg2 from '../../assets/featimg2.svg';
import featimg3 from '../../assets/featimg3.svg';
import featimg4 from '../../assets/featimg4.svg';

export default function Features() {

    // Updated cardData to include only 4 unique cards
    const cardData = [
        { image: featimg1 },
        { image: featimg2 },
        { image: featimg3 },
        { image: featimg4 },
    ];

    // Update the number of visible cards based on screen width
    // useEffect(() => {
    //     const updateVisibleCards = () => {
    //         setVisibleCards(window.innerWidth < 340 ? 1 : 4);
    //     };

    //     updateVisibleCards(); // Set initial value
    //     window.addEventListener('resize', updateVisibleCards);

    //     return () => window.removeEventListener('resize', updateVisibleCards);
    // }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full mx-auto">
        <div className="flex flex-col items-center justify-center w-full lg:w-[98.9vw] p-6 lg:p-16 bg-[#F8F8F8]">
            <div className="flex flex-col items-center justify-between w-full ">
                <h2 className="text-[#1F1F2C] font-urbanist font-bold text-[36px] lg:text-[2.34vw] leading-tight" data-aos="flip-left">Featured Listings</h2>
                <hr className="h-1 bg-red-500 mt-[15px] w-20 mx-auto" />
            </div>
            <div className="flex flex-wrap justify-center w-full max-w-full">
                {cardData.map((card, index) => (
                    <div key={index} className='p-4 mt-[5vh]'>
                        <FeatureCard image={card.image} />
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
    );
}