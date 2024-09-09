
export default function Newcard() {
    return (
        <>
        <div key={index} className='w-[327px] bg-white mx-auto lg:w-[17.3vw] h-[514px] lg:h-[55.5vh] rounded-xl shadow-lg'>
            <div className='p-5 lg:p-[1vw]'>
              <img className='w-[290px]  lg:w-[15.8vw] h-[290px] lg:h-[31.2vh]' src={card.img} alt="Car" />
            </div>
            <div>
              <div className='px-5 lg:px-[1vw] font-urbanist text-[18px] lg:text-[1.17vw] font-bold py-2 leading-[3vh] text-left'>
                {card.title}
              </div>
              <div className='flex justify-between border-b'>
                <div className='flex gap-2 px-5 lg:px-[1vw] pb-2 lg:pb-[1vh]'>
                  {/* <img className='h-[4.5vh] w-[2.2vw]' src={image10} alt="Lot" /> */}
                  <div>
                    <div className='font-urbanist text-[13px] lg:text-[0.75vw] leading-[2vh] py-1 text-left'>
                      Lot: {card.lot}
                    </div>
                    <div className='font-urbanist text-[15px] lg:text-[1vw] font-bold leading-[2.5vh] text-left'>
                      VIN: {card.vin}
                    </div>
                  </div>
                </div>
                <div>
                  <button className='flex justify-center text-center mr-5 lg:mr-[0.5vw] mt-[0.75vw] text-[12px] lg:text-[0.78vw] h-[24px] lg:h-[3vh]  w-[43px] lg:w-[2.7vw] border text-white bg-[#CA0000] rounded-lg'>
                    BID
                  </button>
                </div>
              </div>
              <div className='flex  px-3 py-2 justify-between font-urbanist'>
                <div className='text-left'>
                  <p className='text-[#7A798A] text-[12px] lg:text-[0.80vw]'>Estimated Bid</p>
                  <p className='text-[18px] lg:text-[1vw] font-bold'>{card.estimatedBid}</p>
                </div>
                <div className='text-right'>
                  <p className='text-[#7A798A] text-[12px] lg:text-[0.80vw]'>Potential Savings</p>
                  <p className='text-[#7A798A] text-[18px] lg:text-[1vw] font-semibold'>{card.potentialSavings}</p>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}