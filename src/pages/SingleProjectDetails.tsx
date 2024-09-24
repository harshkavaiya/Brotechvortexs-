import { Link, useParams } from "react-router-dom";
import SitemapPath from "../components/SitemapPath";
import { Button } from "../components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SingleProjectDetails = () => {
  const { slug } = useParams();
  return (
    <div className="bg-gray-200">
      <SitemapPath title={"Project"} child={`${slug}`} />
      <div className="flex flex-col lg:flex-row xl:mx-28 py-10 lg:py-20 mx-4 gap-y-5 lg:gap-x-6">
        {/* left side project details */}
        <div className="lg:w-[70%] w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={`https://zrtechsolutions.com/demo/html/indisoft/assets/images/portfolio/books-1.jpg`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`https://zrtechsolutions.com/demo/html/indisoft/assets/images/portfolio/product-1.jpg`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`https://zrtechsolutions.com/demo/html/indisoft/assets/images/portfolio/app-1.jpg`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`https://zrtechsolutions.com/demo/html/indisoft/assets/images/portfolio/books-1.jpg`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`https://zrtechsolutions.com/demo/html/indisoft/assets/images/portfolio/app-1.jpg`}
              />
            </SwiperSlide>
          </Swiper>
          <div className="flex flex-col gap-y-3">
            <h2 className="text-[20px] md:text-[28px] font-bold mt-3">
              {slug}
            </h2>
            <p className="text-sm md:text-lg">
              Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque
              inventore commodi labore quia quia. Exercitationem repudiandae
              officiis neque suscipit non officia eaque itaque enim. Voluptatem
              officia accusantium nesciunt est omnis tempora consectetur
              dignissimos. Sequi nulla at esse enim cum deserunt eius.
            </p>
            <p>
              Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque
              inventore commodi labore quia quia. Exercitationem repudiandae
              officiis neque suscipit non officia eaque itaque enim. Voluptatem
              officia accusantium nesciunt est omnis tempora consectetur
              dignissimos. Sequi nulla at esse enim cum deserunt eius.
            </p>
            <p>
              Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque
              inventore commodi labore quia quia. Exercitationem repudiandae
              officiis neque suscipit non officia eaque itaque enim. Voluptatem
              officia accusantium nesciunt est omnis tempora consectetur
              dignissimos. Sequi nulla at esse enim cum deserunt eius.
            </p>
          </div>
        </div>
        {/* right side */}
        <div className="lg:w-[30%]">
          <h2 className="text-2xl font-bold">Project Information</h2>
          {/* underline */}
          <div className="w-[15%] h-[3px] bg-orange-500 my-4"> </div>
          <div className="my-5">
            <p className="text-gray-600 font-semibold uppercase text-sm">
              Categoty
            </p>
            <p className="text-lg font-bold text-gray-800">Web Desigb</p>
          </div>
          <div className="my-5">
            <p className="text-gray-600 font-semibold uppercase text-sm">
              Client
            </p>
            <p className="text-lg font-bold text-gray-800">New Company</p>
          </div>
          <div className="my-5">
            <p className="text-gray-600 font-semibold uppercase text-sm">
              Project Date
            </p>
            <p className="text-lg font-bold text-gray-800">01 March, 2020</p>
          </div>
          <div className="my-5">
            <p className="text-gray-600 font-semibold uppercase text-sm">
              Project URL
            </p>
            <Link
              to={`/`}
              className="text-lg font-bold text-blue-500 hover:text-blue-600 cursor-pointer"
            >
              www.example.com
            </Link>
          </div>

          <Button className="bg-yellow-500 hover:bg-orange-900 px-8">
            Visit Website
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectDetails;
