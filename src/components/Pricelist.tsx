import { FaCheck } from "react-icons/fa";

type CheckList = {
  on: Boolean;
};

const Pricelist = () => {
  return (
    <div className="font-[sans-serif] bg-gray-100 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-gray-800 text-3xl font-bold mb-4">
            Pricing list
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8 max-md:max-w-sm max-md:mx-auto">
          <div className="bg-white hover:outline outline-orange-500 rounded-md relative overflow-hidden transition-all">
            <div className="p-6 pb-20">
              <div className="text-left">
                <h4 className="text-gray-800 text-xl mb-4 font-semibold">
                  Basic
                </h4>
                <h3 className="text-gray-800 text-4xl font-semibold">
                  ₹2999.00
                </h3>
              </div>

              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    20 Pages
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    More advanced features for increased productivity
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    Analytics and reporting
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={false} />
                    Email Support
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={false} />
                    Secure data storage
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={false} />
                    Customizable options to meet your specific needs
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={false} />
                    Domain and Hosting
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={false} />
                    24/7 customer support
                  </li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="w-full absolute bottom-0 px-6 py-3 text-sm font-semibold tracking-wide text-white bg-orange-500"
            >
              Get started today
            </button>
          </div>

          <div className="bg-white hover:outline outline-orange-500 rounded-md relative overflow-hidden transition-all">
            <div className="p-6 pb-20">
              <div className="text-left">
                <h4 className="text-gray-800 text-xl mb-4 font-semibold">
                  Optimal
                </h4>
                <h3 className="text-gray-800 text-4xl font-semibold">
                  ₹5999.00
                </h3>
              </div>
              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    50 Pages
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    More advanced features for increased productivity
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    Analytics and reporting
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    Email Support
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    Secure data storage
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={false} />
                    Customizable options to meet your specific needs
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={false} />
                    Domain and Hosting
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={false} />
                    24/7 customer support
                  </li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="w-full absolute bottom-0 px-6 py-3 text-sm font-semibold tracking-wide text-white bg-orange-500"
            >
              Get started today
            </button>
          </div>

          <div className="bg-white hover:outline outline-orange-500 rounded-md relative overflow-hidden transition-all">
            <div className="p-6 pb-20">
              <div className="text-left">
                <h4 className="text-gray-800 text-xl mb-4 font-semibold">
                  Ultimate
                </h4>
                <h3 className="text-gray-800 text-4xl font-semibold">
                  ₹9999.00
                </h3>
              </div>
              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    50+ Pages
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    More advanced features for increased productivity
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    Analytics and reporting
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    Email Support
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    Secure data storage
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    Customizable options to meet your specific needs
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    Domain and Hosting
                  </li>
                  <li className="text-gray-600 flex items-center text-sm">
                    <CheckList on={true} />
                    24/7 customer support
                  </li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="w-full absolute bottom-0 px-6 py-3 text-sm font-semibold tracking-wide text-white bg-orange-500"
            >
              Get started today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckList = ({ on }: CheckList) => {
  return (
    <div
      className={`mr-4 ${
        on ? "bg-orange-500" : "bg-gray-400"
      }  text-white rounded-full text-[10px] p-[4px] font-bold`}
    >
      <FaCheck />
    </div>
  );
};
export default Pricelist;
