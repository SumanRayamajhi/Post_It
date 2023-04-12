import Navbar from "@/auth/navbar";
import { Toaster } from "react-hot-toast";

/* type ChildrenProps = {
  children: React.ReactNode;
}; */

const Layout = ({ children }) => {
  return (
    <div className=" h-screen bg-blue-400 w-full">
      <div className="text-center py-7 ">
        <Navbar />
        <Toaster />
        {children}
      </div>
    </div>
  );
};
export default Layout;
