import land from '../../assets/land.svg';
import Hoverbutton from './Hoverbutton';


export default function Features() {
    // Slider functionality removed, only kept the static display

    const cardData = [
        { image: land, title: 'Land 1' },
        // { image: land, title: 'Land 2' },
        // { image: land, title: 'Land 3' },
        // { image: land, title: 'Land 4' },
    ];

    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full lg:w-[98.9vw] p-6 lg:p-16">
                <div className="flex flex-col items-center justify-between w-full">
                    <h2 className="text-[#1F1F2C] font-urbanist font-bold text-[36px] lg:text-[2.34vw] leading-tight" data-aos="flip-left">Destinations</h2>
                    <hr className="h-1 bg-red-500 mt-[15px] w-20 mx-auto" />
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-[16vw] w-full lg:w-[90vw] mb-[1vh]">
                    <p className="text-center md:text-left lg:w-[900px] md:w-[700px] sm:w-full text-[#7A798A] text-[18px] font-medium mb-4 md:mb-0">
                        Lorem ipsum dolor sit amet. Vel aliquid reiciendis et molestias dignissimos quo eligendi eaque eum iusto explicabo et incidunt cupiditate. Est nemo delectus est quia Quis vel pariatur autem et veniam Quis id vero blanditiis. Ut esse commodi et nulla ullam qui laudantium consequatur est rerum deserunt est Quis nobis qui velit doloribus.
                    </p>
                    <button className="text-center w-full md:w-auto max-w-[150px] h-[46px] rounded-full text-[14px] font-bold bg-white border-[#CA0000] border-[1.5px] px-6 py-2 text-[#CA0000]">
                        How It Works?
                    </button>
                </div>
                <div className="relative w-full lg:w-[1411px] h-[859px] lg:h-[480px] sm:h-auto border-2 border-gray-100 shadow-lg rounded-lg overflow-hidden">
                <div className="flex">
    {cardData.map((card, index) => (
        <div key={index} className="relative w-full md:w-[1411px] h-[859px] md:h-[480px] border-2 border-gray-100 shadow-lg rounded-lg overflow-hidden" >
            <img src={card.image} alt={card.title} className='w-full h-full object-cover' />
            <div className='absolute bottom-0 left-0 w-full h-[36px] gap-[20px] flex items-center justify-center'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-[20px] sm:mt-0 mt-[-900px]'>
                    <Hoverbutton text="Abaco" onClick={handleClick} width="101.43px" />
                    <Hoverbutton text="Freeport" onClick={handleClick} width="120.43px" />
                    <Hoverbutton text="Bimini" onClick={handleClick} width="95.43px" />
                    <Hoverbutton text="Nassau" onClick={handleClick} width="108.43px" />
                    <Hoverbutton text="Eluthera" onClick={handleClick} width="122.43px" />
                    <Hoverbutton text="Exuma" onClick={handleClick} width="103.43px" />
                    <Hoverbutton text="Long Island" onClick={handleClick} width="143.43px" />
                    <Hoverbutton text="Andros" onClick={handleClick} width="110.43px" />
                    <Hoverbutton text="Chub Cay" onClick={handleClick} width="120.43px" />
                    <Hoverbutton text="Rum Cay" onClick={handleClick} width="115.43px" />
                </div>
            </div>
        </div>
    ))}
</div>
                </div>
                <div className="slider-controls flex items-center justify-center w-full md:w-[1410px] mt-[2vh]">
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