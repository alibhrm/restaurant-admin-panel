import dog from "@/assets/images/dog.jpeg";
import { Outlet } from "react-router-dom";
const authLayout = () => {
  return (
    <div className="w-full flex h-full">
      <img src={dog} alt="" className="h-screen" />
      <Outlet />
    </div>
  );
};

export default authLayout;
