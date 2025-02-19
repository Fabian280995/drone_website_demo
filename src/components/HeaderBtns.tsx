import { Mail, Phone } from "lucide-react";
import { PropsWithChildren } from "react";
import { Button } from "./ui/button";

const BigButton = ({ children }: PropsWithChildren) => {
  return (
    <Button className="px-4 py-6 bg-white border-gray-500 border-2 hover:border-primary hover:text-white text-gray-700 text-sm">
      {children}
    </Button>
  );
};

const IconButton = ({ children }: PropsWithChildren) => {
  return (
    <Button
      size={"icon"}
      className="p-2 bg-white border-gray-500 border-2 hover:border-primary hover:text-white text-gray-700"
    >
      {children}
    </Button>
  );
};

function HeaderBtns() {
  return (
    <div className="hidden lg:flex items-center ">
      <div className="hidden 2xl:flex gap-4">
        <BigButton>fabianlessmann@cineeagle.com</BigButton>
        <BigButton>+49 151 16773509</BigButton>
      </div>

      <div className="2xl:hidden flex gap-4">
        <IconButton>
          <Mail />
        </IconButton>
        <IconButton>
          <Phone />
        </IconButton>
      </div>
    </div>
  );
}

export default HeaderBtns;
