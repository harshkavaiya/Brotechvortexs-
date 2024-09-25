import { Loader2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const Forgot = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form>
        <img src="" alt="" />
        <Cardd />
      </form>
    </div>
  );
};

export default Forgot;

export const Cardd = () => {
  const load = false;
  return (
    <Card className="w-72 md:w-96">
      <CardHeader>
        <CardTitle>Forgot password?</CardTitle>
        <CardDescription>
          <p className="mt-3">
            In order to access your dashboard, please enter the email ID you
            provided during the registration process.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name">Email</label>
              <Input id="name" placeholder="Enter your Email" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 justify-between">
        {load ? (
          <Button disabled className="w-full bg-blue-500 hover:bg-blue-600">
            <Loader2 size={20} className="animate-spin mr-2" /> Please Wait
          </Button>
        ) : (
          <Button className="w-full bg-blue-500 hover:bg-blue-600">
            Submit
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
