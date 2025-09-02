import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera } from "lucide-react";
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
            <Button
              variant="outline"
              className="text-blue-600 border-blue-200 bg-transparent"
            >
              Change Photo
            </Button>
            <div className="w-full space-y-2">
              <Label className="text-xs">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself"
                className="min-h-[80px] border-slate-300 focus:border-blue-300"
              />
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
              <Label htmlFor="email" className="text-slate-700 text-xs">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                className="h-11 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
              />
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
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-700 text-xs">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="h-11 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address" className="text-slate-700 text-xs">
                Address
              </Label>
              <Textarea
                id="address"
                placeholder="123 Main St"
                className="min-h-[80px] border-slate-300 focus:border-blue-300"
              />
            </div>
          </div>

          <Separator className="bg-slate-200" />

          {/* Professional information */}
          <div className="space-y-2">
            <h3 className="font-medium">Professional Information</h3>
            <div className="space-y-2">
              <Label
                htmlFor="specialization"
                className="text-slate-700 text-xs"
              >
                Specialization
              </Label>
              <Input
                id="specialization"
                type="text"
                placeholder="Cardiology"
                className="h-11 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="licnumber" className="text-slate-700 text-xs">
                License Number
              </Label>
              <Input
                id="licnumber"
                type="text"
                placeholder="MD-12345-CA"
                className="h-11 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience" className="text-slate-700 text-xs">
                Experience
              </Label>
              <Input
                id="experience"
                type="text"
                placeholder="5 years"
                className="h-11 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="education" className="text-slate-700 text-xs">
                Education
              </Label>
              <Input
                id="education"
                type="text"
                placeholder="Harvard Medical School, MD"
                className="h-11 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        <SheetFooter className="gap-2">
          <Button variant="outline">Cancel</Button>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Save Changes
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default EditProfileSheet;
