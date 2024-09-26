import { FaArrowRightLong } from "react-icons/fa6";
import { TbCircle } from "react-icons/tb";
import { Link } from "react-router-dom";

type InfoBlock = {
  number: Number;
  title: String;
  link: String;
  status: String;
};
const Main = () => {
  return (
    <>
      <div className="">
        {/* Status Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 w-full my-3">
          <InfoBlock
            number={70}
            title={"Total Project"}
            link={"/"}
            status={"+20%"}
          />
          <InfoBlock
            number={70}
            title={"Client Feedback"}
            link={"/"}
            status={"+20%"}
          />
          <InfoBlock
            number={70}
            title={"Unread Message"}
            link={"/"}
            status={"+20%"}
          />
          <InfoBlock
            number={70}
            title={"Blog Posts"}
            link={"/"}
            status={"+20%"}
          />
        </div>
      </div>
    </>
  );
};

const InfoBlock = ({ number, title, link, status }: InfoBlock) => {
  return (
    <div className="bg-gray-300 w-full rounded-lg px-5 py-4">
      <div className="flex items-center">
        <div className="text-[80px] border border-orange-500 p-1.5 rounded-full mr-3">
          <TbCircle />
        </div>
        <div className="">
          <p className="text-3xl font-semibold">{`${number}`}</p>
          <p>{title}</p>
        </div>
      </div>
      <div className="flex items-center ">
        <Link
          to={`${link}`}
          className="w-[40%] flex items-center text-blue-500 cursor-pointer"
        >
          View All <FaArrowRightLong className="ml-3 text-sm" />
        </Link>
        <div className="w-[60%] flex flex-col items-end">
          <p className="">{status}</p>
          <p className="bg-orange-400 text-sm px-1 rounded-md">this month</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
