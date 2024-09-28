import { Button } from "./button";
import Image from "next/image";
import logo from "../assets/indipe_logo.png";

interface AppbarProps {
  user?: {
    name?: string | null;
    email?: string | null;
  };
  // TODO: can u figure out what the type should be here?
  onSignin: any;
  onSignout: any;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  console.log(user);
  return (
    <div className="flex justify-between border-b px-4">
      <div className="text-lg flex flex-col justify-center">
        <Image
          src={logo} // Replace with your logo image path
          alt="Your App Logo"
          width={70}
          height={50}
        />
      </div>
      <div className="flex items-center pt-2">
        <div className="pr-5">
          {user?.email ? `Welcome, ${user?.email}` : "Guest"}
        </div>
        <Button onClick={user ? onSignout : onSignin}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
