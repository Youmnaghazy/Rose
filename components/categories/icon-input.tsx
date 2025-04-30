"use client";
import Image from "next/image";
import { useState } from "react";
import { Label } from "../ui/label";
const IconInput = ({
  primaryIcon,
  onIconChange,
}: {
  primaryIcon?: string;
  onIconChange?: (icon: File) => void;
}) => {
  const [icon, setIcon] = useState<string>(primaryIcon || "/icons/add-2.svg");
  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setIcon(URL.createObjectURL(file));
      onIconChange?.(file);
    }
  };

  return (
    <Label
      className="size-[90px] rounded-full bg-rose-100 flex items-center justify-center"
      htmlFor="icon"
    >
      <input
        type="file"
        id="icon"
        className="sr-only"
        onChange={handleIconChange}
      />
      <Image src={icon} alt="icon" width={50} height={50} />
    </Label>
  );
};
export default IconInput;
