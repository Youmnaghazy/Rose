"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForgotPwd, useCodeDialog } from "@/hooks";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ForgotPwdDialog = () => {
  const [forgotPwdOpen, setForgotPwdOpen] = useForgotPwd();
  const [, setCode] = useCodeDialog();
  return (
    <Dialog open={forgotPwdOpen} onOpenChange={setForgotPwdOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl font-medium">
            Forgot Your Password?
          </DialogTitle>
          <DialogDescription className="sr-only">
            Here you can reset your password
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-6">
          <Input type="text" placeholder="Phone Number or Email" />
          <Button
            type="button"
            onClick={() => {
              setCode(true);
              setForgotPwdOpen(false);
            }}
          >
            Recover Password
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default ForgotPwdDialog;
