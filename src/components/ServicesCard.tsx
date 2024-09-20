import { Check, CodeXml, Settings, WandSparkles } from "lucide-react";

const ITConsultancyCard = ({
  names,
  iconno,
}: {
  names: any;
  iconno: number;
}) => {
  const renderIcon = () => {
    switch (iconno) {
      case 1:
        return (
          <Settings
            size={40}
            className="text-black group-hover:text-white group-hover:animate-spin"
          />
        );
      case 2:
        return (
          <CodeXml
            size={40}
            className="text-black group-hover:text-white group-hover:animate-pulse"
          />
        );
      case 3:
        return (
          <WandSparkles
            size={40}
            className="text-black group-hover:text-white group-hover:animate-bounce"
          />
        );
    }
  };

  return (
    <div className="flex items-center flex-col justify-evenly w-96 h-80 md:w-52 md:h-64 rounded-full bg-white hover:bg-blue-500 group ">
      <div className="absolute w-80 h-72 md:w-44 md:h-56 rounded-full border-2 md:border border-dashed border-black bg-transparent"></div>

      <div>{renderIcon()}</div>

      <h2 className="font-bold text-xl md:text-base text-black group-hover:text-white">
        {names}
      </h2>
      <div className="w-14 h-14 md:w-10 md:h-10 bg-blue-500 flex items-center justify-center rounded-full group-hover:bg-[#df8a8a]">
        <Check size={30} className="text-black group-hover:text-white" />
      </div>
    </div>
  );
};

export default ITConsultancyCard;
