import { IoMdAddCircleOutline } from "react-icons/io";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Link } from "react-router-dom";

const See = () => {
  return (
    <div>
      <div className="flex w-full my-4 mx-2">
        <Input
          id="name"
          name="email"
          placeholder="Search Projects..."
          className="w-[40%]"
        />
        <div className="flex justify-end w-full ">
          <Link
            to={"/Admin/Project/Add"}
            className="flex bg-black text-white rounded-md items-center px-4 font-semibold"
          >
            <IoMdAddCircleOutline className="text-2xl mr-2" />
            Add Project
          </Link>
        </div>
      </div>
      <div className="my-4 mx-2 border border-gray-300 rounded-[20px] overflow-scroll h-[80vh]">
        <Table className="">
          <TableHeader className="">
            <TableRow className="">
              <TableHead>#</TableHead>
              <TableHead>Img</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date Created</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            <TableRow className="">
              <TableCell>1</TableCell>
              <TableCell>
                <div className="w-9 h-9 bg-black rounded-full"></div>
              </TableCell>
              <TableCell>Web Design</TableCell>
              <TableCell>1-jan-2023</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>
                <Button className="text-black bg-white border border-gray-200 rounded-lg mr-2 px-6 hover:bg-gray-300">
                  Edit
                </Button>
                <Button className="text-white bg-red-600 rounded-lg mr-2 px-6 hover:bg-red-700">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                <div className="w-9 h-9 bg-black rounded-full"></div>
              </TableCell>
              <TableCell>Web Design</TableCell>
              <TableCell>1-jan-2023</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>
                <Button className="text-black bg-white border border-gray-200 rounded-lg mr-2 px-6 hover:bg-gray-300">
                  Edit
                </Button>
                <Button className="text-white bg-red-600 rounded-lg mr-2 px-6 hover:bg-red-700">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                <div className="w-9 h-9 bg-black rounded-full"></div>
              </TableCell>
              <TableCell>Web Design</TableCell>
              <TableCell>1-jan-2023</TableCell>
              <TableCell>Active</TableCell>
              <TableCell className="flex">
                <Button className="text-black bg-white border border-gray-200 rounded-lg mr-2 px-6 hover:bg-gray-300">
                  Edit
                </Button>
                <Button className="text-white bg-red-600 rounded-lg mr-2 px-6 hover:bg-red-700">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                <div className="w-9 h-9 bg-black rounded-full"></div>
              </TableCell>
              <TableCell>Web Design</TableCell>
              <TableCell>1-jan-2023</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>
                <Button className="text-black bg-white border border-gray-200 rounded-lg mr-2 px-6 hover:bg-gray-300">
                  Edit
                </Button>
                <Button className="text-white bg-red-600 rounded-lg mr-2 px-6 hover:bg-red-700">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                <div className="w-9 h-9 bg-black rounded-full"></div>
              </TableCell>
              <TableCell>Web Design</TableCell>
              <TableCell>1-jan-2023</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>
                <Button className="text-black bg-white border border-gray-200 rounded-lg mr-2 px-6 hover:bg-gray-300">
                  Edit
                </Button>
                <Button className="text-white bg-red-600 rounded-lg mr-2 px-6 hover:bg-red-700">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                <div className="w-9 h-9 bg-black rounded-full"></div>
              </TableCell>
              <TableCell>Web Design</TableCell>
              <TableCell>1-jan-2023</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>
                <Button className="text-black bg-white border border-gray-200 rounded-lg mr-2 px-6 hover:bg-gray-300">
                  Edit
                </Button>
                <Button className="text-white bg-red-600 rounded-lg mr-2 px-6 hover:bg-red-700">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                <div className="w-9 h-9 bg-black rounded-full"></div>
              </TableCell>
              <TableCell>Web Design</TableCell>
              <TableCell>1-jan-2023</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>
                <Button className="text-black bg-white border border-gray-200 rounded-lg mr-2 px-6 hover:bg-gray-300">
                  Edit
                </Button>
                <Button className="text-white bg-red-600 rounded-lg mr-2 px-6 hover:bg-red-700">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                <div className="w-9 h-9 bg-black rounded-full"></div>
              </TableCell>
              <TableCell>Web Design</TableCell>
              <TableCell>1-jan-2023</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>
                <Button className="text-black bg-white border border-gray-200 rounded-lg mr-2 px-6 hover:bg-gray-300">
                  Edit
                </Button>
                <Button className="text-white bg-red-600 rounded-lg mr-2 px-6 hover:bg-red-700">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                <div className="w-9 h-9 bg-black rounded-full"></div>
              </TableCell>
              <TableCell>Web Design</TableCell>
              <TableCell>1-jan-2023</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>
                <Button className="text-black bg-white border border-gray-200 rounded-lg mr-2 px-6 hover:bg-gray-300">
                  Edit
                </Button>
                <Button className="text-white bg-red-600 rounded-lg mr-2 px-6 hover:bg-red-700">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                <div className="w-9 h-9 bg-black rounded-full"></div>
              </TableCell>
              <TableCell>Web Design</TableCell>
              <TableCell>1-jan-2023</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>
                <Button className="text-black bg-white border border-gray-200 rounded-lg mr-2 px-6 hover:bg-gray-300">
                  Edit
                </Button>
                <Button className="text-white bg-red-600 rounded-lg mr-2 px-6 hover:bg-red-700">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default See;
