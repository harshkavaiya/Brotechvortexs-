import { useParams } from "react-router-dom";
import SitemapPath from "../components/SitemapPath";
import { Button } from "../components/ui/button";

const Services = () => {
  const { slug } = useParams();
  return (
    <div>
      <SitemapPath title={`Services`} child={`${slug}`} />
      <div className="bg-gray-200 px-10 lg:px-40 py-10">
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
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            velit nisi, pretium ut lacinia in, elementum id enim. Curabitur
            aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget
            felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus
            convallis quis ac lectus.
          </p>
          <div className="flex flex-col md:flex-row h-fit my-16 items-center">
            <div className="w-[40%] h-full">
              <h2 className="text-2xl font-bold">Key features</h2>
              <ul className="list-disc pt-3 flex gap-y-3 flex-col pl-5">
                <li>High usability</li>
                <li>Improved performance</li>
                <li>Customizable interface</li>
                <li>Crossplatform support</li>
              </ul>
              <Button className="uppercase px-9 py-7 bg-yellow-500 hover:bg-orange-900 w-fit my-3">
                Get A free Quote
              </Button>
            </div>
            <div className="w-[60%] h-full">
              <img
                src="https://ld-wt73.template-help.com/wt_prod-18959/images/single-service-1-418x289.jpg"
                className="rounded-md shadow-md shadow-gray-300 w-full h-60"
              />
            </div>
          </div>
        </div>
        <div>
          <h2>How we work</h2>
          <div className="flex flex-wrap gap-5 justify-center">
            <ProcessBlock />
            <ProcessBlock />
            <ProcessBlock />
            <ProcessBlock />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProcessBlock = () => {
  return (
    <div className="relative px-10 py-6 w-full md:w-[23%] bg-gray-100 rounded-sm">
      <div className="absolute top-0 right-0 bg-orange-200 px-4 py-2">01</div>
      <p>icon</p>
      <h2 className="font-semibold text-xl mb-2">Free consultation</h2>
      <p className="">
        Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur
        non nulla.
      </p>
    </div>
  );
};
export default Services;
