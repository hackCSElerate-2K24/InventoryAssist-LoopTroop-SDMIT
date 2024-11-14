import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function Navbar() {
    return (
        <div className="bg-green-300 h-16 flex items-center justify-between">
            <div className="logo bg-orange-100 w-10 h-full">
            </div>
            <div className="">
                <Sheet>
                <SheetTrigger>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default Navbar;