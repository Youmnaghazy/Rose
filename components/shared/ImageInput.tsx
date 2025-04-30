"use client";

import { Button } from "../ui/button";
import { useState } from "react";
import { Image } from "lucide-react";
const ImageInput = ({
  defaultImage,
  btn = "in",
  id,
  maxWidth = "300px",
  onChange,
}: {
  defaultImage?: string;
  btn?: "in" | "out";
  id?: string;
  maxWidth?: string;
  onChange?: (file: File) => void;
}) => {
  const [image, setImage] = useState<string | undefined>(
    defaultImage || undefined
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      onChange?.(file);
    }
  };

  return (
    <div className="grid gap-4">
      <div className="border rounded-xl p-2 grid place-content-center space-y-4">
        <input
          type="file"
          name="image-input"
          className="sr-only"
          id={id || "image-input"}
          onChange={handleImageChange}
        />
        <img
          src={image}
          alt=""
          className="aspect-square object-center object-cover"
          style={{
            maxWidth,
          }}
        />

        {!image && <Image className="text-gray-400" size={100} />}

        {btn === "in" && (
          <Button asChild>
            <label htmlFor={id || "image-input"}>Add Image</label>
          </Button>
        )}
      </div>
      {btn === "out" && (
        <Button asChild className="w-full">
          <label htmlFor={id || "image-input"}>Add Image</label>
        </Button>
      )}
    </div>
  );
};
export default ImageInput;
