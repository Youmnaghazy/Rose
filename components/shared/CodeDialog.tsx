"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCodeDialog } from "@/hooks";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CodeDialog = () => {
  const [codeOpen, setCodeOpen] = useCodeDialog();
  return (
    <Dialog open={codeOpen} onOpenChange={setCodeOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl font-medium">
            Verify Your Code
          </DialogTitle>
          <DialogDescription className="sr-only">
            Here you can verify your code
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-6">
          <Input type="text" placeholder="Enter Code" />
          <div className="flex items-center justify-end gap-1">
            Didnt receive code?{" "}
            <button
              className="text-rose-100 underline cursor-pointer"
              type="button"
              onClick={() => {}}
            >
              Resend
            </button>
          </div>
          <Button type="submit">Recover Password</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default CodeDialog;
