import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { catchError } from "@/lib/errorHandler";
import { useAuthStore } from "@/store/auth";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z.email("Invalid email format").nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(50)
    .nonempty("Password is required"),
});

function useLoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const { login, error, isLoading } = useAuthStore();

  const navigate = useNavigate();

  async function onLoginSubmit(data) {
    await login(data.email, data.password);

    // Only navigate if login was successful (no error in store)
    if (!error) {
      navigate("/dashboard");
    }
    // Error handling is already done in the store
  }

  return {
    register,
    handleSubmit: handleSubmit(onLoginSubmit),
    errors,
    error,
    isLoading,
  };
}

export { useLoginForm };
