"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLogin } from "@/hooks";
import LoginForm from "./LoginForm";

const LoginDialog = () => {
  const [loginOpen, setLoginOpen] = useLogin();
  return (
    <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl font-medium">
            Login to your account
          </DialogTitle>
          <DialogDescription className="sr-only">
            Here you can login to your account
          </DialogDescription>
        </DialogHeader>
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
};
export default LoginDialog;
