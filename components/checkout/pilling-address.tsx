import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import FormGroup from "./form-group";
import SelectGroup from "./select-group";
import { useCheckoutStep } from "@/hooks";

const PillingAddress = () => {
  const [checkoutStep, setCheckoutStep] = useCheckoutStep();
  return (
    <div className="my-5 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <FormGroup
          label="First Name"
          id="first-name"
          placeholder="First Name"
          variant="primary"
        />
        <FormGroup
          label="Last Name"
          id="last-name"
          placeholder="Last Name"
          variant="primary"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <FormGroup
          label="Email"
          id="email"
          placeholder="Email"
          variant="primary"
        />
        <FormGroup
          label="Phone Number"
          id="phone-number"
          placeholder="Phone Number"
          variant="primary"
        />
      </div>
      <FormGroup
        label="Address Line 1"
        id="address-line-1"
        placeholder="Address Line 1"
        variant="primary"
      />
      <FormGroup
        label="Address Line 2"
        id="address-line-2"
        placeholder="Address Line 2"
        variant="primary"
      />
      <div className="grid md:grid-cols-2 gap-5">
        <SelectGroup label="Country" id="country" placeholder="Country" />
        <FormGroup
          label="City"
          id="city"
          placeholder="City"
          variant="primary"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <FormGroup
          label="Postal Code"
          id="postal-code"
          placeholder="Postal Code"
          variant="primary"
        />
        <FormGroup
          label="State"
          id="state"
          placeholder="State"
          variant="primary"
        />
      </div>
      <div className="flex md:items-center gap-4 justify-between md:flex-row flex-col">
        <Button variant="primary">
          <ArrowLeftIcon />
          Back to Cart
        </Button>
        <Button variant="primary" onClick={() => setCheckoutStep(2)}>
          Next Step
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default PillingAddress;
