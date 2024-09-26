import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Loader2, LogIn } from "lucide-react";
import { BiHome } from "react-icons/bi";
import React, { FormEvent, useState } from "react";
import { toast } from "sonner";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handledata = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const formHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      toast.error("Please fill in both fields.");
    } else {
      toast.success(user.password);
      toast.success(user.email);
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form onSubmit={formHandler}>
        <img src="" alt="" />
        <Cardd handledata={handledata} />
      </form>
    </div>
  );
};

export const Cardd = ({
  handledata,
}: {
  handledata: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  const load = false;

  return (
    <Card className="w-72 md:w-96">
      <CardHeader>
        <CardTitle>Welcome, Back</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="name">Email</label>
            <Input
              id="name"
              name="email"
              placeholder="Enter your Email"
              onChange={handledata}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              name="password"
              placeholder="Enter your Password"
              onChange={handledata}
            />
          </div>
          <Link
            to="/admin/forgot-password"
            className="text-right hover:underline cursor-pointer"
          >
            Forgot Password?
          </Link>
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
            <LogIn size={20} className="mr-1" /> Login
          </Button>
        )}
        <Link to="/" className="w-full">
          <Button variant="outline" className="w-full">
            <BiHome size={20} className="mr-1" /> Home
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SignIn;
