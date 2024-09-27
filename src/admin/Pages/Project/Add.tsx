import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";

const Add = () => {
  return (
    <div className="mx-2 my-2">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Add Project</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-y-5 w-full">
            <div className="flex flex-col w-full">
              <label htmlFor="title">Title</label>
              <Input
                id="title"
                name="title"
                placeholder="Enter your Title"
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="desc">Desc</label>
              <Input
                id="desc"
                name="desc"
                placeholder="Enter your Desc"
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="img">Img</label>
              <Input id="img" type="file" name="img" className="w-full" />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="Categoty">Categoty</label>
              <Input
                id="Categoty"
                name="Categoty"
                placeholder="Enter your Categoty"
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="Client">Client</label>
              <Input
                id="Client"
                name="Client"
                placeholder="Enter your Client Name"
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="ProjectDate">Project Date</label>
              <Input
                id="ProjectDate"
                name="ProjectDate"
                type="date"
                placeholder="Enter your Project Date"
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="Projecturl">Project URL</label>
              <Input
                id="Projecturl"
                name="Projecturl"
                placeholder="Enter your Project URL"
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <CardFooter className="flex justify-end w-full">
            <Button className="bg-blue-500 hover:bg-blue-600 px-10">Add</Button>
          </CardFooter>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Add;
