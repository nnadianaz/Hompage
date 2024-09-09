
import Testimonialcard from './Testimonialcard';
import girl1 from '../../assets/girl1.svg';
import girl2 from '../../assets/girl2.svg';


export default function Testimonial() {
    
    // Testimonial data
    const testimonialData = [
        { name: "Jody Andrews", title: "Project Manager", description: "Augue Sed viverra nulla Interdum mia bibendum velit sapien scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor iaculis eget", image: girl1 },
        { name: "Jody Andrews", title: "Project Manager", description: "Augue Sed viverra nulla Interdum mia bibendum velit sapien scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor iaculis eget", image: girl2 },
    ];


    return (
        <div className="flex items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full lg:w-[98.9vw] p-6 lg:p-16">
            <div className="flex flex-col items-center justify-between w-full">
                <h2 className="text-[#1F1F2C] font-urbanist font-bold text-[36px] lg:text-[2.34vw] leading-tight" data-aos="flip-left">Testimonials</h2>
                <hr className="h-1 bg-red-500 mt-[15px] w-20 mx-auto" />
            </div>
            <div className="flex flex-wrap justify-center w-full max-w-full">
    {testimonialData.map((testimonial, index) => (
        <div key={index} className='p-4 mt-[5vh]'>
            <Testimonialcard
                name={testimonial.name}
                title={testimonial.title}
                description={testimonial.description}
                image={testimonial.image}
            />
        </div>
    ))}
</div>
        <div className="slider-controls flex items-center justify-center w-full md:w-[1410px] mt-[4vh]">
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