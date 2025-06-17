// components/common/ImageWithSkeleton.tsx
"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithSkeletonProps extends Omit<ImageProps, "alt"> {
  alt: string;
  classNameWrapper?: string;
  classNameImage?: string;
}

const ImageWithSkeleton = ({
  classNameWrapper = "",
  classNameImage = "",
  ...props
}: ImageWithSkeletonProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden rounded-2xl ${classNameWrapper}`}>
      <>
        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-full rounded-2xl z-10 animate-shimmer" />
        )}
        <Image
          {...props}
          alt={props.alt}
          onLoadingComplete={() => setIsLoading(false)}
          className={`${classNameImage} ${
            isLoading ? "opacity-0" : "opacity-100 hover:scale-105"
          } transition-opacity duration-500 ease-in-out`}
        />
      </>
    </div>
  );
};

export default ImageWithSkeleton;
