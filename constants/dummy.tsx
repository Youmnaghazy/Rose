import { Category } from "@/types/dummy";

export type Stat = {
  label: string;
  value: number;
  icon: string;
  color?: string;
};

export const stats: Stat[] = [
  {
    label: "Total invoices",
    value: 2478,
    icon: "/icons/gray-line.svg",
  },
  {
    label: "Paid invoices",
    value: 1234,
    icon: "/icons/green-line.svg",
    color: "#09BD3C",
  },
  {
    label: "Unpaid invoices",
    value: 974,
    icon: "/icons/red-line.svg",
    color: "#FD5353",
  },
  {
    label: "Total invoices Sent",
    value: 1420,
    icon: "/icons/orange-line.svg",
    color: "#FB6D3B",
  },
];

export const categories: Category[] = [
  {
    _id: "1",
    name: "Gifts Box",
    icon: "/icons/gifts.svg",
    items: 10,
  },
  {
    _id: "2",
    name: "Garment Care",
    icon: "/icons/clothes.svg",
    items: 10,
  },
  {
    _id: "3",
    name: "Home and Living Gift",
    icon: "/icons/home-cat.svg",
    items: 10,
  },
  {
    _id: "4",
    name: "Jewelry & Accessories",
    icon: "/icons/jewelry.svg",
    items: 10,
  },
  {
    _id: "5",
    name: "Office & Stationery",
    icon: "/icons/office.svg",
    items: 10,
  },
  {
    _id: "6",
    name: "Office & Stationery",
    icon: "/icons/office.svg",
    items: 10,
  },
  {
    _id: "7",
    name: "Office & Stationery",
    icon: "/icons/office.svg",
    items: 10,
  },
  {
    _id: "8",
    name: "Office & Stationery",
    icon: "/icons/office.svg",
    items: 10,
  },
];
