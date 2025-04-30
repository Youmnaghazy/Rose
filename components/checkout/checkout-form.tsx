"use client";

import { useCheckoutStep } from "@/hooks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PillingAddress from "./pilling-address";
import PaymentInfo from "./payment-info";

const CheckoutForm = () => {
  const [checkoutStep, setCheckoutStep] = useCheckoutStep();
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-4"
      value={checkoutStep === 1 ? "item-1" : "item-2"}
      onValueChange={(value) => {
        if (value === "item-1") {
          setCheckoutStep(1);
        } else {
          setCheckoutStep(2);
        }
      }}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger
          data-state={checkoutStep === 1 ? "open" : "closed"}
          onClick={() => setCheckoutStep(1)}
          className={`border! rounded-lg! hover:no-underline! border-[#DEE2E6] data-[state=open]:text-rose-100 px-4! py-2!`}
        >
          Your Pilling Address
        </AccordionTrigger>
        <AccordionContent>
          <PillingAddress />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          data-state={checkoutStep === 2 ? "open" : "closed"}
          onClick={() => setCheckoutStep(2)}
          className={`border! rounded-lg! hover:no-underline! border-[#DEE2E6] data-[state=open]:text-rose-100 px-4! py-2!`}
        >
          Your Payment Info
        </AccordionTrigger>
        <AccordionContent>
          <PaymentInfo />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CheckoutForm;
