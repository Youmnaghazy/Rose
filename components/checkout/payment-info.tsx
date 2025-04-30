import { ArrowRightIcon } from "lucide-react";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "../ui/button";
import FormGroup from "./form-group";
import PaymentMethodSelector from "./payment-method-selector";
import { useForm } from "react-hook-form";
import { useCheckoutStep } from "@/hooks";

const PaymentInfo = () => {
  const {
    control,
    formState: { errors },
  } = useForm();

  const [checkoutStep, setCheckoutStep] = useCheckoutStep();
  return (
    <form className="my-5 space-y-5">
      <PaymentMethodSelector
        control={control}
        name="paymentMethod"
        error={errors.paymentMethod?.message as string}
      />
      <div className="grid md:grid-cols-2 gap-5">
        <FormGroup
          label="Card Holder Name"
          id="card-holder-name"
          placeholder="Card Holder Name"
          variant="primary"
        />
        <FormGroup
          label="Card Number"
          id="card-number"
          placeholder="Your Card Number"
          variant="primary"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <FormGroup
          label="Expiry Date"
          id="expiry-date"
          placeholder="MM/YY"
          variant="primary"
        />
        <FormGroup label="CVV" id="cvv" placeholder="CVV" variant="primary" />
      </div>
      <div className="flex md:items-center gap-4 justify-between md:flex-row flex-col">
        <Button variant="primary" onClick={() => setCheckoutStep(1)}>
          <ArrowLeftIcon />
          Previous Step
        </Button>
        <Button variant="primary">
          Pay Now
          <ArrowRightIcon />
        </Button>
      </div>
    </form>
  );
};

export default PaymentInfo;
