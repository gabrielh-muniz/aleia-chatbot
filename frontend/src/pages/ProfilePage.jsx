import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  SquarePen,
  ShieldUser,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Heart,
  Activity,
} from "lucide-react";

const recentProcedures = [
  {
    id: "1",
    title: "Cardiac Catheterization",
    type: "surgery",
    date: "2024-01-23",
    time: "09:00 AM",
    patient: "John D.",
    status: "completed",
    duration: "2h 30m",
    notes: "Successful procedure, patient stable",
    icon: Heart,
  },
  {
    id: "2",
    title: "Echocardiogram Review",
    type: "consultation",
    date: "2024-01-23",
    time: "11:30 AM",
    patient: "Maria S.",
    status: "completed",
    duration: "45m",
    notes: "Normal results, follow-up in 6 months",
    icon: Activity,
  },
  {
    id: "3",
    title: "Pacemaker Installation",
    type: "surgery",
    date: "2024-01-22",
    time: "02:00 PM",
    patient: "Robert K.",
    status: "completed",
    duration: "3h 15m",
    notes: "Complex case, excellent outcome",
    icon: Heart,
  },
  {
    id: "4",
    title: "Post-Op Consultation",
    type: "follow-up",
    date: "2024-01-22",
    time: "04:30 PM",
    patient: "Lisa M.",
    status: "completed",
    duration: "30m",
    notes: "Recovery progressing well",
    icon: CheckCircle,
  },
  {
    id: "5",
    title: "Stress Test Evaluation",
    type: "procedure",
    date: "2024-01-21",
    time: "10:00 AM",
    patient: "David L.",
    status: "completed",
    duration: "1h 20m",
    notes: "Abnormal results, further testing required",
    icon: Activity,
  },
  {
    id: "6",
    title: "Emergency Consultation",
    type: "consultation",
    date: "2024-01-20",
    time: "11:45 PM",
    patient: "Emergency Patient",
    status: "completed",
    duration: "2h 10m",
    notes: "Acute MI, immediate intervention successful",
    icon: AlertCircle,
  },
];

function ProfilePage() {
  return (
    <div className="p-4 flex flex-col gap-5">
      <div className="flex flex-col xl:flex-row gap-5">
        {/* Left */}
        <Card className="w-full xl:w-1/3 shadow-sm border-0 bg-white/95 overflow-hidden">
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
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700"
                >
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
        <Card className="w-full xl:w-1/3 shadow-sm border-0 bg-white/95 overflow-hidden">
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
        <div className="w-full xl:w-1/3 shadow-sm border-0 bg-white/95 overflow-hidden">
          Professional information
        </div>
      </div>
      {/* Recent activities */}
      <Card className="w-full overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center text-slate-800">
            <Clock className="mr-2 h-5 w-5 text-blue-600" />
            Recent Medical Procedures & Activities
          </CardTitle>
          <p className="text-sm text-slate-600 mt-1">
            Timeline of recent procedures and patient interactions
          </p>
        </CardHeader>

        <CardContent className="p-6">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-green-200 to-blue-200"></div>

            <div className="space-y-6">
              {recentProcedures.map((procedure, index) => {
                const IconComponent = procedure.icon;
                return (
                  <div
                    key={procedure.id}
                    className="relative flex items-start space-x-6"
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-blue-200 rounded-full shadow-md">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-4 border border-slate-200 shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-lg font-semibold text-slate-800">
                              {procedure.title}
                            </h3>
                            <Badge className="text-xs">
                              {procedure.type.charAt(0).toUpperCase() +
                                procedure.type.slice(1)}
                            </Badge>
                          </div>
                          <Badge className="text-xs mt-2 sm:mt-0">
                            {procedure.status.charAt(0).toUpperCase() +
                              procedure.status.slice(1)}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-slate-500" />
                            <span className="text-sm text-slate-600">
                              {new Date(procedure.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-slate-500" />
                            <span className="text-sm text-slate-600">
                              {procedure.time}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Activity className="h-4 w-4 text-slate-500" />
                            <span className="text-sm text-slate-600">
                              {procedure.duration}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-slate-700">
                              Patient:
                            </span>
                            <span className="text-sm text-slate-600">
                              {procedure.patient}
                            </span>
                          </div>
                          {procedure.notes && (
                            <div className="text-xs text-slate-500 max-w-xs truncate">
                              {procedure.notes}
                            </div>
                          )}
                        </div>

                        {/* Progress indicator for recent items */}
                        {index < 2 && (
                          <div className="mt-3 pt-3 border-t border-slate-200">
                            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                              <span>Procedure Completion</span>
                              <span>100%</span>
                            </div>
                            <Progress value={100} className="h-1.5" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* View More Button */}
            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                View Complete Medical History
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProfilePage;
