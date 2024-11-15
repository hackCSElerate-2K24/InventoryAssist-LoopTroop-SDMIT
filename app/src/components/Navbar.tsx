import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import burgermenu from "../assets/burger-bar.png";
import { Link } from "@tanstack/react-router";
import inventory from "../assets/inventory.svg";
import gear from "../assets/gear.png";
import category from "../assets/category.svg";
import supplier from "../assets/supplier.svg";
import home from "../assets/home.png";
import { useRef } from "react";
import { Button } from "./ui/button";
import useAuthStore from "../store/authStore";
import authService from "@/appwrite/auth.ts"; // Import the store
import logo from '../assets/inventoryAssist.png'


const items = [
  {
    title: "DashBoard",
    url: "/",
    icons: home,
  },
  {
    title: "Inventory",
    url: "/inventory",
    icons: inventory,
  },
  {
    title: "Category",
    url: "/category",
    icons: category,
  },
  {
    title: "Suppliers",
    url: "/suppliers",
    icons: supplier,
  },
  {
    title: "Profile",
    url: "/profile",
    icons: gear,
  },
];

function Navbar() {
  const ref = useRef(null);
  const {userInfo,  login } = useAuthStore();
  const clearUser = useAuthStore((state) => state.clearUser);

  return (
    <div className="px-4 sm:px-16 bg-white z-50 border-b-2 h-16 flex items-center justify-between fixed top-0 left-0 w-screen">
            <a href="/">
              <div className="h-10 flex items-center ">
                <img
                  src={logo}
                  alt="Logo"
                  className="aspect-square h-full object-cover"
                />
                <h1 className="font-bold text-xl ml-2">Inventory Assist</h1>
              </div>
            </a>

      <div>
        {
          userInfo &&
          <Sheet>
            <SheetTrigger>
              <img src={burgermenu} alt="" className="h-10 aspect-square" />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div className="flex items-center gap-4" key={item.title}>
                    <Link
                      to={item.url}
                      className="flex gap-4 items-center"
                      onClick={() => {
                        ref.current?.click();
                      }}
                    >
                      <img src={item.icons} className="size-5 object-cover"></img>
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  </div>
                ))}
              </div>
              <div>
                <Button
                  className="w-full"
                  onClick={async () => {
                    await authService.logout();
                    clearUser();
                    ref.current?.click();
                  }}
                >
                  Logout
                </Button>
                <SheetClose ref={ref} className="h-0"></SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        }
      </div>
    </div>
  );
}

export default Navbar;
