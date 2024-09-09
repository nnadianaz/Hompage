const ProfileCard = ({ name, title, description, image }) => {
  return (
    <div className="relative flex flex-col items-center justify-center max-w-[578px] h-[402px] rounded-xl bg-[#FFFFFF] shadow-lg">
      <div className="flex flex-col items-center w-[90%] max-w-[514px] h-[auto] px-4">
        <p className="text-gray-700 text-base text-[18px] leading-[26px] font-medium mb-2 text-center">
          {description}
        </p>
        <div className="font-extrabold text-[24px] text-[#062A3F] text-center mb-1">{name}</div>
        <p className="text-[#82929B] text-base text-[14px] text-center">
          {title}
        </p>
      </div>
      <img
        className="absolute bottom-[-64px] left-1/2 transform -translate-x-1/2 w-[128px] h-[128px] rounded-xl"
        src={image}
        alt={name}
      />
    </div>
  );
};

export default ProfileCard;
