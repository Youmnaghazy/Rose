"use client";

import { sidebarItems } from "@/constants";
import { cn } from "@/lib/utils";
import { SidebarItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  return (
    <ul className="w-full grid gap-4">
      {sidebarItems.map((item) => (
        <SidebarLi key={item.label} item={item} />
      ))}
    </ul>
  );
};
export default Sidebar;

const SidebarLi = ({ item }: { item: SidebarItem }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(item.href);
  const Icon = item.Icon;
  return (
    <li>
      <Link
        href={item.href}
        className={cn(
          "group flex w-[240px] items-center gap-4 text-lg font-bold py-4 px-8 rounded-e-2xl hover:bg-rose-100 transition-all duration-300",
          isActive ? "bg-rose-100" : "bg-transparent"
        )}
      >
        <Icon
          className={cn(
            isActive && "fill-white",
            !isActive && "fill-rose-100",
            "group-hover:fill-white transition-all duration-300"
          )}
        />
        <span
          className={cn(
            isActive && "text-white",
            !isActive && "text-rose-100",
            "group-hover:text-white transition-all duration-300"
          )}
        >
          {item.label}
        </span>
      </Link>
    </li>
  );
};
