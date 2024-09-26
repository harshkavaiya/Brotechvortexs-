import { Loader2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../components/ui/input-otp";
import { GoVerified } from "react-icons/go";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Separator } from "../../components/ui/separator";

const OtpVerify = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form>
        <img src="" alt="" />
        <Cardd />
      </form>
    </div>
  );
};

export default OtpVerify;

export const Cardd = () => {
  const load = false;
  return (
    <Card className="w-72 md:w-96">
      <CardHeader>
        <CardTitle className="mb-5">OTP Verification</CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex justify-center items-center">
            <InputOTP maxLength={4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
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
            <GoVerified size={20} className="mr-1" /> Verify
          </Button>
        )}
        <Link to="/admin/login" className="w-full">
          <Button variant="outline" className="w-full">
            <IoIosArrowBack size={20} className="mr-1" /> Back To Login
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
