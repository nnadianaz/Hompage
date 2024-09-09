function DateRange() {
  return (
    <div className="flex flex-row items-center w-[20vw]">
      <div className="flex items-center">
        <svg
          className="w-4 h-4"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="14" height="12" rx="2" />
          <path d="M17 2l-4 4" />
        </svg>
        <span className="hidden sm:inline text-[0.5vw] md:text-xs">09</span>
        <span className="hidden sm:inline text-[0.5vw] md:text-xs mx-1">/</span>
        <span className="hidden sm:inline text-[0.5vw] md:text-xs">01</span>
        <span className="hidden sm:inline text-[0.5vw] md:text-xs mx-1">/</span>
        <span className="hidden sm:inline text-[0.5vw] md:text-xs">2024</span>
        <span className="inline sm:hidden mx-1">-09-</span>
      </div>
      <span className="mx-2 hidden sm:inline">-</span>
      <div className="flex items-center">
        <svg
          className="w-4 h-4 mr-2"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="14" height="12" rx="2" />
          <path d="M17 2l-4 4" />
        </svg>
        <span className="hidden sm:inline text-[0.5vw] md:text-xs">12</span>
        <span className="hidden sm:inline text-[0.5vw] md:text-xs mx-1">/</span>
        <span className="hidden sm:inline text-[0.5vw] md:text-xs">01</span>
        <span className="hidden sm:inline text-[0.5vw] md:text-xs mx-1">/</span>
        <span className="hidden sm:inline text-[0.5vw] md:text-xs">2024</span>
        <span className="inline sm:hidden ">-12</span>
      </div>
    </div>
  );
}

export default DateRange;