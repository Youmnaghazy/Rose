"use client";

import { AlertCircle } from "lucide-react";
import { type Control, Controller } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Define the props interface
interface PaymentMethodSelectorProps {
  control: Control<any>;
  name?: string;
  error?: string;
}

export default function PaymentMethodSelector({
  control,
  name = "paymentMethod",
  error,
}: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-3">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup
            onValueChange={field.onChange}
            value={field.value}
            className="grid grid-cols-2 gap-4"
          >
            <div>
              <RadioGroupItem value="cash" id="cash" className="peer sr-only" />
              <Label
                htmlFor="cash"
                className={cn(
                  "flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-6 hover:bg-accent transition-all",
                  "cursor-pointer",
                  "peer-data-[state=checked]:border-rose-100 peer-data-[state=checked]:text-rose-100 peer-data-[state=checked]:bg-primary/5"
                )}
              >
                <img
                  src="/dash/Cash.svg"
                  alt="Cash on Delivery"
                  className="mb-3"
                />
                <div className="text-center">
                  <h3 className="font-medium">Cash on Delivery</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Pay when you receive
                  </p>
                </div>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="visa" id="visa" className="peer sr-only" />
              <Label
                htmlFor="visa"
                className={cn(
                  "flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-6 hover:bg-accent transition-all",
                  "cursor-pointer",
                  "peer-data-[state=checked]:border-rose-100 peer-data-[state=checked]:text-rose-100 peer-data-[state=checked]:bg-primary/5"
                )}
              >
                <img src="/dash/Visa.svg" alt="Visa Card" className="mb-3" />
                <div className="text-center">
                  <h3 className="font-medium">Visa Card now</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Pay now securely
                  </p>
                </div>
              </Label>
            </div>
          </RadioGroup>
        )}
      />

      {error && (
        <p className="text-sm font-medium text-error-red mt-2">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}
