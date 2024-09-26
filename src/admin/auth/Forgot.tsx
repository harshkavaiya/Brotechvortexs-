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
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineSendToMobile } from "react-icons/md";
import React, { FormEvent, useState } from "react";
import { toast } from "sonner";

const Forgot = () => {
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  const changehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setemail(e.target.value); // Set the email state directly
  };

  const formHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please fill email fields.");
    } else {
      toast.success("Send Email To " + " " + email);
      setemail("");
      navigate("/admin/verify");
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form onSubmit={formHandler}>
        <img src="" alt="" />
        <Cardd handledata={changehandler} useremail={email} />
      </form>
    </div>
  );
};

export const Cardd = ({
  handledata,
  useremail,
}: {
  handledata: React.ChangeEventHandler<HTMLInputElement>;
  useremail: any;
}) => {
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
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="name">Email</label>
            <Input
              type="email"
              id="name"
              placeholder="Enter your Email"
              value={useremail}
              onChange={handledata}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 justify-between">
        {load ? (
          <Button disabled className="w-full bg-blue-500 hover:bg-blue-600">
            <Loader2 size={20} className="animate-spin mr-2" /> Please Wait
          </Button>
        ) : (
          <Button
            className="w-full bg-blue-500 hover:bg-blue-600"
            type="submit"
          >
            <MdOutlineSendToMobile size={20} className="mr-1" /> Submit
          </Button>
        )}
        <Link to="/admin/login" className="w-full">
          <Button variant="outline" className="w-full">
            <IoIosArrowBack size={20} className="mr-1" /> Back
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Forgot;
