import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import burgermenu from "../assets/burger-bar.png"
import { Link } from "@tanstack/react-router"
import inventory from "../assets/inventory.svg"
import gear from "../assets/gear.png"
import category from "../assets/category.svg"
import supplier from "../assets/supplier.svg"
import home from "../assets/home.png"
import { useRef } from "react"
import { Button } from "./ui/button"


const items = [
  {
    title: "DashBoard",
    url: "/",
    icons: home,
  },
  {
    title: "Inventory",
    url: "/inventory",
    icons: inventory
  },
  {
    title: "Category",
    url: "/category",
    icons:category
  },
  {
    title: "Suppliers",
    url: "/suppliers",
    icons:supplier
    
  },
  {
    title: "Settings",
    url: "/setting",
    icons: gear,
  },
]


function Navbar() {
    const ref = useRef(null);
    return (
        <div className="z-50 px-8 bg-white border-b-2 h-16 flex items-center justify-between fixed top-0 left-0 w-screen">
            <div className="logo bg-orange-100 w-10 h-full">
            </div>
            <div className="">
                <Sheet>
                <SheetTrigger>
                        <img src={burgermenu} alt="" className="h-10 aspect-square" />
                </SheetTrigger>
                <SheetContent className="flex flex-col justify-between">
                    <div className="flex flex-col gap-4 mt-8">
                    {items.map((item) => (
                        <div className="flex items-center gap-4 hover:bg-gray-200 rounded-xl p-4">
                            <Link to={item.url} className="flex gap-4 items-center" onClick={()=>{ref.current?.click()}}>
                            <img src={item.icons} className="size-5 object-cover"></img>
                                <span className="text-xl">
                                {item.title}
                                </span>
                            </Link>
                        </div>
                    ))}
                    </div>
                    <div>
                        <Button className="w-full">Logout</Button>
                        <SheetClose ref={ref} className="h-0"></SheetClose>
                    </div>
                </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default Navbar;