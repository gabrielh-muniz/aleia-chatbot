import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CentralizedWrapper from "@/components/CentralizedWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const schema = z.object({
  email: z.email("Invalid email address").nonempty("Email is required"),
});

function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onForgotPasswordSubmit = (data) => {
    console.log(data);
  };

  return (
    <CentralizedWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.25, 0.25, 1],
        }}
        className="w-full max-w-sm"
      >
        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-left">
            <div className="flex items-center justify-start">
              <Link
                to="/auth/login"
                className="flex items-center text-blue-400 hover:text-blue-500 text-sm gap-1.5 font-semibold"
              >
                <ChevronLeft className="w-4 h-4 font-semibold" />
                Back
              </Link>
            </div>
            <div className="space-y-2">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Enter your email
              </CardTitle>
              <CardDescription className="text-gray-600">
                Type in your email associated with your account to receive a
                password reset link
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <form
              className="space-y-4"
              onSubmit={handleSubmit(onForgotPasswordSubmit)}
            >
              {/* Global error message with animation */}
              {errors.root && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-red-50 border border-red-200 rounded-md p-3"
                  >
                    <p className="text-sm text-red-600">{errors.global}</p>
                  </motion.div>
                </AnimatePresence>
              )}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="doctor@clinic.com"
                  className={`h-11 border-gray-200 focus:border-blue-400 focus:ring-blue-400 ${
                    errors.email
                      ? "border-red-300 focus:border-red-400 focus:ring-red-400"
                      : ""
                  }`}
                  {...register("email")}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.div
                      initial={{ opacity: 0, y: -5, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -5, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-sm text-red-600">
                        {errors.email?.message}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Button
                type="submit"
                className="w-full h-11 bg-blue-400 hover:bg-blue-500 text-white font-medium transition-colors"
              >
                Send Reset Link
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </CentralizedWrapper>
  );
}

export default ForgotPasswordPage;
