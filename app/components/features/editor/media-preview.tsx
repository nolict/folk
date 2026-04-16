"use client";

import React from "react";
import Image from "next/image";

interface MediaPreviewProps {
  src: string;
  type: "image" | "video";
}

export const MediaPreview = ({ src, type }: MediaPreviewProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
      <div className="aspect-[4/5] w-full md:aspect-video">
        {type === "video" ? (
          <video
            src={src}
            className="h-full w-full object-contain"
            controls
          />
        ) : (
          <Image
            src={src}
            alt="Preview"
            fill
            className="object-contain"
          />
        )}
      </div>
    </div>
  );
};