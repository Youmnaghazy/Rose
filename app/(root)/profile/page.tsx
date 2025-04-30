"use client";
import Container from "@/components/shared/Container";
import api from "@/lib/helpers/axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { FC } from "react";
import { ArrowRightIcon } from "lucide-react";
import FormGroup from "@/components/checkout/form-group";
import SelectGroup from "@/components/checkout/select-group";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface IProps { }

const schema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string().optional(),
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  postalCode: z.string().optional(),
  state: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const page: FC<IProps> = () => {
  const { register, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const getUserData: any = async () => {
    const response = await api.get(`/auth/profile-data`);
    return response.data;
  };

  const updateUserData = async (data: FormData) => {
    const response = await api.post(`/auth/editProfile`, data);
    return response.data;
  };

  const { isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const userData = await getUserData();
      reset({
        firstName: userData.user.firstName,
        lastName: userData.user.lastName,
        email: userData.user.email,
        phoneNumber: userData.user.phone,
        addressLine1: userData.user.addressLine1,
        addressLine2: userData.user.addressLine2,
        country: userData.user.country,
        city: userData.user.city,
        postalCode: userData.user.postalCode,
        state: userData.user.state,
      });
      return userData;
    },
  });

  const mutation = useMutation({
    mutationFn: updateUserData,
    onSuccess: () => {
      alert("Profile updated successfully!");
    },
    onError: () => {
      alert("Failed to update profile.");
    },
  });

  const onSubmit = (formData: FormData) => {
    mutation.mutate(formData, {
      onError: (error) => {
        console.error("Error updating profile:", error);
      },
    });
  };


  return (
    <Container className="!w-[70%]">
      <form onSubmit={handleSubmit(onSubmit)} className="my-5 space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <FormGroup
            label="First Name"
            id="first-name"
            placeholder="First Name"
            variant="primary"
            {...register("firstName")}
          />
          <FormGroup
            label="Last Name"
            id="last-name"
            placeholder="Last Name"
            variant="primary"
            {...register("lastName")}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <FormGroup
            label="Email"
            id="email"
            placeholder="Email"
            variant="primary"
            {...register("email")}
          />
          <FormGroup
            label="Phone Number"
            id="phone-number"
            placeholder="Phone Number"
            variant="primary"
            {...register("phoneNumber")}
          />
        </div>
        <FormGroup
          label="Address Line 1"
          id="address-line-1"
          placeholder="Address Line 1"
          variant="primary"
          {...register("addressLine1")}
        />
        <FormGroup
          label="Address Line 2"
          id="address-line-2"
          placeholder="Address Line 2"
          variant="primary"
          {...register("addressLine2")}
        />
        <div className="grid md:grid-cols-2 gap-5">
          <SelectGroup
            label="Country"
            id="country"
            placeholder="Country"
            {...register("country")}
          />
          <FormGroup
            label="City"
            id="city"
            placeholder="City"
            variant="primary"
            {...register("city")}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <FormGroup
            label="Postal Code"
            id="postal-code"
            placeholder="Postal Code"
            variant="primary"
            {...register("postalCode")}
          />
          <FormGroup
            label="State"
            id="state"
            placeholder="State"
            variant="primary"
            {...register("state")}
          />
        </div>
        <div className="w-full flex md:items-end gap-4 justify-end md:flex-row flex-col">
          <Button type="submit" variant="primary">
            Confirm
            <ArrowRightIcon />
          </Button>
        </div>
      </form>
    </Container>
  );
}
export default page;
