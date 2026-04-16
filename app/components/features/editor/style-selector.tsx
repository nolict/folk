"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const styles = [
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean white background with black text",
  },
  {
    id: "bold",
    name: "Bold",
    description: "High contrast with vibrant accent colors",
  },
  {
    id: "vintage",
    name: "Vintage",
    description: "Retro aesthetic with warm tones",
  },
  {
    id: "modern",
    name: "Modern",
    description: "Sleek and contemporary look",
  },
];

export const StyleSelector = () => {
  const [selectedStyle, setSelectedStyle] = React.useState<string>("minimal");

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-xl font-semibold text-[#242424]">Select Style</h2>
      <div className="space-y-3">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => setSelectedStyle(style.id)}
            className={`w-full rounded-lg border p-4 text-left transition-colors ${
              selectedStyle === style.id
                ? "border-[#242424] bg-gray-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="font-medium text-[#242424]">{style.name}</div>
            <div className="mt-1 text-sm text-[#898989]">{style.description}</div>
          </button>
        ))}
      </div>
      <div className="mt-6">
        <Button variant="primary" size="lg" className="w-full">
          Add Text
        </Button>
        <Button variant="secondary" size="lg" className="mt-3 w-full">
          Add Username
        </Button>
        <Button variant="outline" size="lg" className="mt-3 w-full">
          Download
        </Button>
      </div>
    </div>
  );
};