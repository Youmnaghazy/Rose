import { z } from "zod";

const signUpSchema = z
  .object({
    firstName: z.string({ message: "First name is required" }).min(1, {
      message: "First name is required",
    }),
    lastName: z.string({ message: "Last name is required" }).min(1, {
      message: "Last name is required",
    }),
    email: z.string({ message: "Email is required" }).email(),
    password: z
      .string({ message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Password must contain at least one special character",
      }),
    rePassword: z.string({ message: "Password is required" }).min(8, {
      message: "Password is required",
    }),
    phone: z
      .string({ message: "Phone is required" })
      .min(12, {
        message: "Phone is required",
      })
      .regex(/^\+[0-9]+$/),
    gender: z.string().optional().default("male"),
  })
  .refine((data) => data.password === data.rePassword, {
    path: ["rePassword"],
    message: "Passwords do not match",
  });

const paymentSchema = z.discriminatedUnion("paymentMethod", [
  z.object({
    paymentMethod: z.literal("cash"),
  }),
  z.object({
    paymentMethod: z.literal("visa"),
    cardNumber: z
      .string()
      .min(16, { message: "Card number must be 16 digits" })
      .max(16, { message: "Card number must be 16 digits" }),
    cardHolder: z.string().min(1, { message: "Card holder name is required" }),
    expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
      message: "Expiry date must be in MM/YY format",
    }),
    cvv: z
      .string()
      .min(3, { message: "CVV must be 3 digits" })
      .max(3, { message: "CVV must be 3 digits" }),
  }),
]);

const loginSchema = z.object({
  email: z.string({ message: "Email is required" }).email(),
  password: z.string({ message: "Password is required" }),
});

export const addProductSchema = z.object({
  title: z.string({ message: "Title is required" }).min(1, {
    message: "Title is required",
  }),
  price: z.coerce.number({ message: "Price is required" }).min(1, {
    message: "Price must be greater than 0",
  }),
  description: z.string({ message: "Description is required" }).min(1, {
    message: "Description is required",
  }),
  img1: z.instanceof(File),
  img2: z.instanceof(File),
  img3: z.instanceof(File),
  img4: z.instanceof(File),
  imgCover: z.instanceof(File),
  quantity: z.coerce.number({ message: "Quantity is required" }).min(1, {
    message: "Quantity must be greater than 0",
  }),
  discount: z.coerce.number({ message: "Discount is required" }).min(1, {
    message: "Discount must be greater than 0",
  }),
  priceAfterDiscount: z.coerce
    .number({ message: "Price after discount is required" })
    .min(1, {
      message: "Price after discount must be greater than 0",
    }),
  category: z.string().uuid().optional(),
  occassion: z.string().uuid().optional(),
});

export const editProductSchema = z.object({
  title: z.string({ message: "Title is required" }).min(1, {
    message: "Title is required",
  }),
  price: z.coerce.number({ message: "Price is required" }).min(1, {
    message: "Price must be greater than 0",
  }),
  description: z.string({ message: "Description is required" }).min(1, {
    message: "Description is required",
  }),
  quantity: z.coerce.number({ message: "Quantity is required" }).min(1, {
    message: "Quantity must be greater than 0",
  }),
  discount: z.coerce.number({ message: "Discount is required" }).min(1, {
    message: "Discount must be greater than 0",
  }),
  priceAfterDiscount: z.coerce
    .number({ message: "Price after discount is required" })
    .min(1, {
      message: "Price after discount must be greater than 0",
    }),
  category: z.string().uuid().optional(),
  occassion: z.string().uuid().optional(),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
export type PaymentSchemaType = z.infer<typeof paymentSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;
export type AddProductSchemaType = z.infer<typeof addProductSchema>;
export type EditProductSchemaType = z.infer<typeof editProductSchema>;

export { signUpSchema, paymentSchema, loginSchema };
