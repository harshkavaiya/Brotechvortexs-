import SitemapPath from "../components/SitemapPath";
import { ProjectBlock } from "../components/Projects";
import { BsShop } from "react-icons/bs";
import { PiStudentBold } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { IoIosDesktop } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

const Project = () => {
  return (
    <div>
      <SitemapPath title={"Project"} />
      <div className=" flex flex-wrap justify-center gap-y-44 lg:gap-y-40 gap-x-10 pb-40 pt-20 xl:px-40 px-10 bg-gray-100">
        <ProjectBlock
          src={
            "https://img.freepik.com/premium-photo/ecommerce-banner_1281315-2602.jpg?ga=GA1.1.776949700.1726931221"
          }
          icon={<BsShop />}
          title={`Ecommerce`}
          desc={`Ecommerce Website using React js and nodejs`}
          link={`Ecommerce`}
        />
        <ProjectBlock
          src={
            "https://img.freepik.com/premium-vector/back-school-illustration_1302918-33878.jpg?ga=GA1.1.776949700.1726931221&semt=ais_hybrid"
          }
          icon={<PiStudentBold />}
          title={`College Mangment`}
          desc={`Manage The College in Digitaly`}
          link={`College Mangment`}
        />
        <ProjectBlock
          src={
            "https://img.freepik.com/premium-vector/flat-vector-illustration-depicting-desktop-computer-with-code-editor-open-smartphone-plant-desk-with-blue-background_520881-8513.jpg?ga=GA1.1.776949700.1726931221&semt=ais_hybrid"
          }
          icon={<IoIosDesktop />}
          title={`Desktop Software`}
          desc={`Create A Desktop App`}
          link={`Desktop Software`}
        />
        <ProjectBlock
          src={
            "https://img.freepik.com/free-vector/virtual-reality-landing-page-template_23-2148250885.jpg?t=st=1727000041~exp=1727003641~hmac=a0fc1b70f23c841e81a04565b874531669b335edcb6ec1905f41bd6fb882ded2&w=900"
          }
          icon={<IoPersonOutline />}
          title={`Portfolio`}
          desc={`Create A Personal PortFolio`}
          link={`Portfolio`}
        />
        <ProjectBlock
          src={
            "https://img.freepik.com/free-vector/coronavirus-tracking-location-app-concept_23-2148660224.jpg?ga=GA1.1.776949700.1726931221&semt=ais_hybrid"
          }
          icon={<SlLocationPin />}
          title={`Track Location`}
          desc={`Track the People Location`}
          link={`Track Location`}
        />
      </div>
    </div>
  );
};

export default Project;
