import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Camera,
  ChevronDownIcon,
  Calendar as CalendarIcon,
} from "lucide-react";
import { useState } from "react";

function EditProfileSheet({ isOpen, onClose }) {
  const [date, setDate] = useState(null);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm-max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Hi, user! Update your profile information here.
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-4 py-2 px-4">
          {/* Profile image section */}
          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <Avatar className="h-22 w-22 rounded-full">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-green-600 hover:bg-green-700 p-0"
              >
                <Camera className="h-3 w-3 text-white" />
              </Button>
            </div>
          </div>

          <Separator className="bg-slate-200" />

          {/*  User Information */}
          <div className="space-y-3">
            <h3 className="font-medium">User Info</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-xs font-medium text-gray-700"
                >
                  First Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="h-11 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="text-xs font-medium text-gray-700"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="John"
                  className="h-11 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date" className="text-slate-700 text-xs">
                Date of Birth
              </Label>
              <Input
                id="date"
                type="date"
                className="h-11 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
              />
            </div>
          </div>

          <Separator className="bg-slate-200" />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default EditProfileSheet;
