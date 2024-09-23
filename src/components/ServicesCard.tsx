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
    <div className="flex items-center flex-col justify-evenly w-96 h-80 md:w-48 md:h-72 rounded-full bg-white group overflow-hidden relative z-10">
      <div className="absolute z-10 w-[350px] h-72 md:w-40 md:h-64 rounded-full border-2 md:border border-dashed border-black group-hover:border-white bg-transparent"></div>

      <div className="absolute z-0 w-80 h-72 md:w-40 md:h-64 rounded-full md:after:w-52 md:after:h-80 after:z-10 after:bg-blue-500 after:absolute md:after:-inset-y-5 after:-inset-y-5 top-0 after:-inset-x-10 md:after:-inset-x-5 after:-translate-y-80 after:transition-transform after:group-hover:-translate-y-5 after:rounded-full"></div>

      <div className="relative flex flex-col items-center gap-5 z-20">
        <div>{renderIcon()}</div>
        <h2 className="font-bold text-xl md:text-base text-black group-hover:text-white">
          {names}
        </h2>
        <div className="w-14 h-14 md:w-10 md:h-10 bg-blue-500 flex items-center justify-center rounded-full group-hover:bg-[#df8a8a]">
          <Check size={30} className="text-black group-hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default ITConsultancyCard;
