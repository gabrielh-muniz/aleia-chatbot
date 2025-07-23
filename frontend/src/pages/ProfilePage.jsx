import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  SquarePen,
  ShieldUser,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";

function ProfilePage() {
  return (
    <div className="p-4 flex flex-col xl:flex-row gap-5">
      {/* Left */}
      <Card className="w-full xl:w-1/3 shadow-sm border-0 bg-white/95 backdrop-blur-sm overflow-hidden">
        <CardContent className="flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs font-bold">
              <ShieldUser />
              Admin
            </Badge>
            <Button className="text-sm cursor-pointer" variant="outline">
              <SquarePen className="h-5 w-5" />
              Edit Profile
            </Button>
          </div>

          {/* Centered profile image */}
          <div className="flex justify-center">
            <Avatar className="h-25 w-25 rounded-full">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          {/* Name, location and badges */}
          <div className="text-center flex flex-col items-center space-y-2">
            <h2 className="text-xl font-bold mb-1">Dr. John Doe</h2>
            <p className="text-sm">Health City, USA</p>
            <div className="flex flex-wrap justify-center gap-2 sm:justify-start items-baseline">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                Experience: 12 years
              </Badge>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700"
              >
                License: MD-12345-CA
              </Badge>
            </div>
          </div>

          {/* Bio */}
          <p className="text-slate-600">
            Experienced cardiologist with a passion for preventive care and
            patient education. Specializing in interventional cardiology and
            heart disease prevention.
          </p>

          {/* Additional information */}
          <div className="w-full flex justify-between items-end">
            <div className="text-left">
              <div className="text-sm">Procedures</div>
              <div className="text-2xl font-bold">1k+</div>
            </div>
            <div className="text-right">
              <div className="text-sm">Success Rate</div>
              <div className="text-2xl font-bold">100%</div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Center */}
      <Card className="w-full xl:w-1/3 shadow-sm border-0 bg-white/95 backdrop-blur-sm overflow-hidden">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="flex items-center text-slate-800 text-xl font-bold">
            User Information
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-col items-start">
            <span className="text-sm text-slate-500 flex items-center gap-1">
              <Mail className="h-4 w-4 text-slate-500" />
              Email
            </span>
            <span className="text-sm font-medium text-slate-600">
              email@example.com
            </span>
          </div>
          <Separator className="bg-slate-200" />
          <div className="flex flex-col items-start">
            <span className="text-sm text-slate-500 flex items-center gap-1">
              <Phone className="h-4 w-4 text-slate-500" />
              Phone
            </span>
            <span className="text-sm font-medium text-slate-600">
              +1 (555) 123-4567
            </span>
          </div>
          <Separator className="bg-slate-200" />
          <div className="flex flex-col items-start">
            <span className="text-sm text-slate-500 flex items-center gap-1">
              <MapPin className="h-4 w-4 text-slate-500" />
              Address
            </span>
            <span className="text-sm font-medium text-slate-600 text-right max-w-xs">
              123 Medical Center Dr, Health City, HC 12345
            </span>
          </div>
          <Separator className="bg-slate-200" />
          <div className="flex flex-col items-start">
            <span className="text-sm text-slate-500 flex items-center gap-1">
              <Calendar className="h-4 w-4 text-slate-500" />
              Date of Birth
            </span>
            <span className="text-sm font-medium text-slate-600">
              01/02/2003
            </span>
          </div>
        </CardContent>
      </Card>
      {/* Right */}
      <div className="w-full xl:w-1/3 bg-slate-500">Right panel</div>
    </div>
  );
}

export default ProfilePage;
