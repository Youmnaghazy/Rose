import { useLogin, useForgotPwd } from "@/hooks";
import { useRegister } from "@/hooks";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { loginSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchemaType } from "@/schemas";
import { AlertCircle, Loader2 } from "lucide-react";
import { useLoginMutation } from "@/lib/api/hooks/auth";
import { setToken, signInWithGoogle } from "@/lib/actions";
import { toast } from "sonner";
import { useAppDispatch } from "@/store";
import { fetchUserProfile } from "@/lib/slices/CurrentUser";
import { signIn } from "@/auth";

const LoginForm = () => {
  const [, setRegister] = useRegister();
  const [, setLogin] = useLogin();
  const [, setForgotPwd] = useForgotPwd();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const { mutateAsync: login, isPending } = useLoginMutation({
    onSuccess: async (data) => {
      setToken(data.token);
      await dispatch(fetchUserProfile());
      toast.success("Login successful");
      setLogin(false);
    },
  });

  const onSubmit = async (data: LoginSchemaType) => {
    const response = await login(data);
    console.log("response", response);
  };

  return (
    <div className="space-y-4">
      <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" placeholder="Email" {...register("email")} />
        {errors.email && (
          <p className="text-red-500 text-sm flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.email.message}
          </p>
        )}
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.password.message}
          </p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <input type="checkbox" id="remember" className="accent-rose-100" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button
            className="text-rose-100 underline cursor-pointer"
            type="button"
            onClick={() => {
              setForgotPwd(true);
              setLogin(false);
            }}
          >
            Forgot Password?
          </button>
        </div>
        <div className="flex items-center justify-center gap-1">
          No Account?{" "}
          <button
            className="text-rose-100 underline cursor-pointer"
            type="button"
            onClick={() => {
              setRegister(true);
              setLogin(false);
            }}
          >
            Create One Here
          </button>
        </div>
        <Button type="submit" disabled={isPending}>
          {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
          Login
        </Button>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <form action={signInWithGoogle}>
        <Button variant="outline" type="submit" className="w-full">
          <img src="/icons/google.svg" alt="google" width={20} height={20} />
          Google
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
