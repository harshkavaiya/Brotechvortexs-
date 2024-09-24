import { useParams } from "react-router-dom";
import SitemapPath from "../components/SitemapPath";
import { Button } from "../components/ui/button";
import { ReactNode } from "react";
import { FaCode } from "react-icons/fa";
import Pricelist from "../components/Pricelist";
import { RiPresentationFill } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

type ProcessBlock = {
  step: Number;
  icon: ReactNode;
  title: String;
  desc: String;
};
const Services = () => {
  const { slug } = useParams();
  return (
    <div>
      <SitemapPath title={`Services`} child={`${slug}`} />
      <div className="bg-gray-100 px-10 lg:px-36 py-10">
        <div className="flex flex-col gap-y-3 font-semibold">
          <h2 className="text-4xl font-semibold mb-2">Corporate solutions</h2>
          <p className="text-gray-700 font-semibold mb-6">
            Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum
            sed sit amet dui.
          </p>
          <div>
            {/* defination */}
            <p className="text-2xl w-4/5 mb-5">
              Cras ultricies ligula sed magna dictum porta. Cras ultricies
              ligula sed magna dictum porta.
            </p>
          </div>
          <p className="mb-2 text-gray-700 font-semibold ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            velit nisi, pretium ut lacinia in, elementum id enim. Curabitur
            aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget
            felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus
            convallis quis ac lectus.
          </p>
          <div className="flex flex-col md:flex-row h-fit my-16 items-center">
            <div className="w-full md:w-[40%] h-full">
              <h2 className="text-2xl font-bold">Key features</h2>
              <ul className="list-disc pt-3 flex gap-y-3 flex-col pl-5">
                <li>High usability</li>
                <li>Improved performance</li>
                <li>Customizable interface</li>
                <li>Crossplatform support</li>
              </ul>
              <Button className="uppercase px-9 py-7 bg-orange-500 hover:bg-orange-900 w-fit my-3">
                Get A free Quote
              </Button>
            </div>
            <div className="w-full md:w-[60%] h-full">
              <img
                src="https://ld-wt73.template-help.com/wt_prod-18959/images/single-service-1-418x289.jpg"
                className="rounded-md shadow-md shadow-gray-300 w-full h-60"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-semibold my-8">How we work</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <ProcessBlock
              step={1}
              icon={<RiPresentationFill />}
              title={"Research"}
              desc={
                "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla."
              }
            />
            <ProcessBlock
              step={2}
              icon={<MdOutlineDesignServices />}
              title={"Concept creation"}
              desc={
                "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla."
              }
            />
            <ProcessBlock
              step={3}
              icon={<FaCode />}
              title={"Development"}
              desc={
                "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla."
              }
            />
            <ProcessBlock
              step={4}
              icon={<HiOutlineClipboardDocumentCheck />}
              title={"Quality Assurance"}
              desc={
                "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla."
              }
            />
          </div>
        </div>
        <div className="my-20">
          <Pricelist />
        </div>
      </div>
    </div>
  );
};

const ProcessBlock = ({ step, icon, title, desc }: ProcessBlock) => {
  return (
    <div className="group relative px-8 py-6 w-full md:w-[40%] xl:w-[24%] bg-gray-200 rounded-md shadow-md shadow-gray-300 text-start">
      <div className="absolute top-0 right-0 bg-gray-100 text-orange-500 h-10 w-12 text-3xl font-semibold cursor-default text-center">
        <p className="group-hover:-mt-2 mt-1 transition-all duration-400">
          0{`${step}`}
        </p>
      </div>
      <p className="text-orange-500 text-5xl mb-3 cursor-default">{icon}</p>
      <h2 className="font-semibold text-xl mb-2 cursor-text">{title}</h2>
      <p className="text-gray-500 font-semibold w-full mb-3">{desc}</p>
    </div>
  );
};
export default Services;
